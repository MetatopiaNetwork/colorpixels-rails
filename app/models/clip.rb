class Clip < ApplicationRecord
  belongs_to :event

  has_one_attached :video

  def video_url
    return "https://replace.com" + Rails.application.routes.url_helpers.rails_blob_path(video, only_path: true)
    # url_for(clip.video) # for redirect links
    # rails_blob_path(clip.video, disposition: "attachment") # for downloads links
  end
end
