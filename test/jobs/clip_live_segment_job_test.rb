require "test_helper"

class ClipLiveSegmentJobTest < ActiveJob::TestCase
  test "#perform works" do
    hls_url = "https://something.com/index.m3u8"
    event = events(:regular_event)
    clip = Clip.create!(event: event)
    ClipLiveSegmentJob.any_instance.stubs(:ffmpeg_clip).returns(get_mock_file)

    ClipLiveSegmentJob.perform_now(clip, hls_url)

    assert_match /clip\.mp4/, clip.video_url
  end

  def get_mock_file
    file = Rails.root.join('test', 'fixtures', 'files', 'white_clip.mp4')
    File.open(file)
  end
end
