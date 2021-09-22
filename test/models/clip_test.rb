require "test_helper"

class ClipTest < ActiveSupport::TestCase
  test "#create can create a clip" do
    clip = Clip.new(
        event: events(:regular_event),
    )

    clip.save!
  end
end
