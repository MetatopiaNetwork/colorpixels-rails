require "test_helper"

class ClipTest < ActiveSupport::TestCase
  test "#create can create a clip" do
    clip = Clip.new(
        event: events(:regular_event),
    )

    assert_nothing_raised do
      clip.save!
    end
  end
end
