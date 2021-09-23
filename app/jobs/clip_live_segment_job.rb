class ClipLiveSegmentJob < ApplicationJob
  queue_as :default

  def perform(clip, hls_url = nil, n_seconds = 20)
    hls_url = hls_url || clip.event.stream_url
    tempfile = ffmpeg_clip(hls_url, n_seconds)

    clip.video.attach(
        io: tempfile,
        filename: "clip.mp4",
        content_type: "video/mp4"
    )
  end

  def ffmpeg_clip(hls_url, n_seconds)
    tempfile = ::Tempfile.new(%w[video .mp4])
    path = tempfile.path
    tempfile.close
    tempfile.unlink

    system("ffmpeg", "-live_start_index 1 -sseof -20 -t 20 -i", hls_url, path, "-y")

    return tempfile
  end
end
