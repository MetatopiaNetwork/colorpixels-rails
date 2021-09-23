class Clip < ApplicationRecord
  belongs_to :event

  has_one_attached :video


  # a relative URL that proxies the file through this rails server.
  def relative_url
    begin
      return Rails.application.routes.url_helpers.rails_blob_path(video, only_path: true)
      # url_for(clip.video) # for redirect links
      # rails_blob_path(clip.video, disposition: "attachment") # for downloads links
    rescue
      nil
    end
  end

  # the direct url of the blob storage like: https://colorpixels-dev1.sfo3.digitaloceanspaces.com/1yb130y0oc5r9fghopgwob7uy2xt
  # does not work with local storage. Only when a real blob storage is connected.
  def service_url
    begin
      return video.url
    rescue
      nil
    end
  end
end
