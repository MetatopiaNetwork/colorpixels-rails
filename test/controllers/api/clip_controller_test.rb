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
    assert_match /\/clip\.mp4/, data[:relative_url]
    # assert_not_nil data[:service_url] # does not work with local storage.
  end

  test "#show returns 404 when clip does not exists" do
    get api_clip_path + "/404"

    assert_response 404
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

  test "#update works" do
    clip = clips(:regular_clip)

    patch api_clip_update_path(clip.id), params: { creator_eth_addr: "creator_eth_addr", token_id: "token_id", contract_id: "contract_id"}

    assert_response :success
    data = JSON.parse(response.body, symbolize_names: true)

    assert_equal "creator_eth_addr", data[:creator_eth_addr]
    assert_equal "token_id", data[:token_id]
    assert_equal "contract_id", data[:contract_id]
  end
end
