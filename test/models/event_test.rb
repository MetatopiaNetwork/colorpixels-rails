require "test_helper"

class EventTest < ActiveSupport::TestCase
  test "#create can create events and generates a live_id" do
    event = Event.new(
        creator: creators(:regular_creator),
        name: "event 1",
        stream_url: "https://url.com",
    )

    assert_nothing_raised do
      event.save!
    end

    assert_not_nil event.live_id
    assert event.live_id.length == 12
  end

  test "#create throws an error when no creator is specified" do
    event = Event.new(
        name: "event 1",
        stream_url: "https://url.com",
    )
    assert_raises ActiveRecord::RecordInvalid do
      event.save!
    end
  end

  test "#clips returns associated clips" do
    event = events(:regular_event)
    assert event.clip.length >= 1
  end
end
