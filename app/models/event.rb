require 'securerandom'
class Event < ApplicationRecord

    validates :live_id, presence: true, uniqueness: true
    validates :name, presence: true
    validates :stream_url, presence: true
    


    after_initialize :default_values

    def default_values
        self.live_id ||= SecureRandom.alphanumeric(12)
    end


end
