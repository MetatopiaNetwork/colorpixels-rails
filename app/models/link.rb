class Link < ApplicationRecord
  belongs_to :creator

  validates_presence_of :title
  validates_presence_of :url
end
