require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    skip("to fix")
    get root_path
    assert_response :success
  end
end
