class Creator < ApplicationRecord
  
  extend FriendlyId
  friendly_id :username, use: [:slugged, :finders] 

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one_attached :avatar 
  has_many :events
  has_many :links
  accepts_nested_attributes_for :links, reject_if: ->(attributes){ attributes['url', 'title'].blank? }, allow_destroy: true
  
  validate :password_complexity
  validates :username, presence: true, uniqueness: true
  
  
  def first_name
    name.split.first
  end

  def last_name 
    name.split.last
  end

  def short_name
    name.blank? ? "" : "#{first_name} #{last_name[0,1]}."
  end

  def should_generate_new_friendly_id?
    new_record? || username_changed? || slug.nil? || slug.blank? 
  end

  def admin?
    self.admin == true
  end

  def public_url
    "www.colorpixels.xyz/" + self.slug
  end
  
  def password_complexity
    # Regexp extracted from https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    return if password.blank? || password =~ /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$/

    errors.add :password, 'Password must be 6-32 characters in length and include: 1 uppercase, 1 lowercase, 1 digit and 1 special character'
  end

  def update_with_password(params, *options)
      current_password = params.delete(:current_password)

      if params[:password].blank?
        params.delete(:password)
        params.delete(:password_confirmation) if params[:password_confirmation].blank?
      end

      result = if params[:password].blank? || valid_password?(current_password)
        update(params, *options)
      else
        self.assign_attributes(params, *options)
        self.valid?
        self.errors.add(:current_password, current_password.blank? ? :blank : :invalid)
        false
      end

      clean_up_passwords
      result
   end

   def self.from_omniauth(auth)
    where(auth.slice(:provider, :uid)).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.username = auth.info.nickname
    end
  end
  
  def self.new_with_session(params, session)
    if session["devise.user_attributes"]
      new(session["devise.user_attributes"], without_protection: true) do |user|
        user.attributes = params
        user.valid?
      end
    else
      super
    end
  end

end
