require "test_helper"

class CreatorTest < ActiveSupport::TestCase

  test "#create can a creator" do
    creator = Creator.new(
        email: "email_unique@cp.com",
        name: "creator name",
        username: "creator_username",
        password: "ColorPass123!",
        password_confirmation: "ColorPass123!"
    )

    assert_nothing_raised do
      creator.save!
    end
  end

  test "#create has unique email" do
    Creator.create!(
        email: "email_unique@cp.com",
        name: "creator name",
        username: "creator_username",
        password: "ColorPass123!",
        password_confirmation: "ColorPass123!"
    )

    creator_copy = Creator.new(
        email: "email_unique@cp.com",
        name: "other name",
        username: "creator_username_2",
        password: "ColorPass123!",
        password_confirmation: "ColorPass123!"
    )

    assert_raise do
      creator_copy.save!
    end
  end
end
