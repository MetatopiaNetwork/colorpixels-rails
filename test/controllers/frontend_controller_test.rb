require "test_helper"

class FrontendControllerTest < ActionDispatch::IntegrationTest

  test "can GET /frontend" do
    get live_path("live_id")
    assert_response :success
  end
end
