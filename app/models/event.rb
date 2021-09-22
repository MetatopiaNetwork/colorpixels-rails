require 'securerandom'
class Event < ApplicationRecord
    belongs_to :creator
    has_many :clip

    validates :live_id, presence: true, uniqueness: true
    validates :name, presence: true
    validates :stream_url, presence: true
    


    after_initialize :default_values

    def default_values
        self.live_id ||= SecureRandom.alphanumeric(12)
    end


end
