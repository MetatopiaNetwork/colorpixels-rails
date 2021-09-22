class Clip < ApplicationRecord
  belongs_to :event

  has_one_attached :video
end
