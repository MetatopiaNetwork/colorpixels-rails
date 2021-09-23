require "test_helper"

class ClipLiveSegmentJobTest < ActiveJob::TestCase
  test "#perform works" do
    Clip.destroy_all
    hls_url = "https://something.com/index.m3u8"
    event = events(:regular_event)
    ClipLiveSegmentJob.any_instance.stubs(:ffmpeg_clip).returns(get_mock_file)

    ClipLiveSegmentJob.perform_now(event, hls_url)

    clip = Clip.last
    assert event, clip.event
  end

  def get_mock_file
    file = Rails.root.join('test', 'fixtures', 'files', 'white_clip.mp4')
    File.open(file)
  end
end
