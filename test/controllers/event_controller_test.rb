require "test_helper"

class EventControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers # Rails >= 5

  test "should get show" do
    sign_in creators(:regular_creator)
    get event_show_url
    assert_response :success
  end

  test "should get new" do
    sign_in creators(:regular_creator)
    get event_new_url
    assert_response :success
  end

  test "should get create" do
    sign_in creators(:regular_creator)
    get event_create_url
    assert_response :success
  end
end
