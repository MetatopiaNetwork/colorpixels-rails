require 'securerandom'
class Event < ApplicationRecord
  belongs_to :event
  has_one_attached :clip_url
end
