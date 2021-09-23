require "test_helper"

class ClipControllerTest < ActionDispatch::IntegrationTest

  test "#show returns json data of the clip" do
    clip = clips(:regular_clip)

    get api_clip_path + "/#{clip.id}"

    assert_response :success
    data = JSON.parse(response.body, symbolize_names: true)

    assert_equal clip.id, data[:id]
    assert_nil data[:video_url]
  end

  test "#show returns attached video" do
    clip = clips(:regular_clip)
    file = Rails.root.join('test', 'fixtures', 'files', 'white_clip.mp4')
    clip.video.attach(
        io: File.open(file),
        filename: "clip.mp4",
        content_type: "video/mp4"
    )

    get api_clip_path + "/#{clip.id}"

    assert_response :success
    data = JSON.parse(response.body, symbolize_names: true)

    assert_equal clip.id, data[:id]
    assert_match /\/clip\.mp4/, data[:video_url]
  end

  test "#create creates a new clip" do
    event = events(:regular_event)

    post api_clip_path, params: { live_id: event.live_id }

    assert_response :success

    data = JSON.parse(response.body, symbolize_names: true)
    assert_equal Clip.last.id, data[:id]
  end


  test "#create returns unauthorized when live_id is not present" do
    post api_clip_path

    assert_response :unauthorized
  end

  test "#create returns unauthorized when event does not exists for live_id" do
    post api_clip_path, params: { live_id: "404_missing"}

    assert_response :unauthorized
  end
end
