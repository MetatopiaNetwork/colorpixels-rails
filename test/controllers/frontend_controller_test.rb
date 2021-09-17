require "test_helper"

class FrontendControllerTest < ActionDispatch::IntegrationTest

  test "can GET /frontend" do
    get root_path
    assert_response :success
  end
end
