require "test_helper"

class EventControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers # Rails >= 5

  test "should get show" do
    creator = creators(:regular_creator)
    sign_in creator
    get event_show_url(creator.events.first.id)
    assert_response :success
  end

  test "should get new" do
    sign_in creators(:regular_creator)
    get event_new_url
    assert_response :success
  end
end
