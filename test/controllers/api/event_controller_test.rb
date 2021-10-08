require "test_helper"

class ClipControllerTest < ActionDispatch::IntegrationTest

  test "#show returns json data of the event" do
    event = events(:regular_event)

    get api_event_show_path(event.live_id)

    assert_response :success
    data = JSON.parse(response.body, symbolize_names: true)

    assert_equal event.id, data[:id]
    assert_equal event.name, data[:name]
    assert_equal event.stream_url, data[:stream_url]
  end

  test "#show returns 401 when event does not exists" do
    get api_event_show_path(401)

    assert_response 401
  end
end
