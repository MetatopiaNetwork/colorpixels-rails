require "test_helper"

class ClipTest < ActiveSupport::TestCase
  test "#create can create a clip" do
    clip = Clip.new(
        event: events(:regular_event),
    )

    clip.save!
  end

  test "#stream_url can attach MP4 file" do
    clip = clips(:regular_clip)

    file = Rails.root.join('test', 'fixtures', 'files', 'white_clip.mp4')
    clip.video.attach(
        io: File.open(file),
        filename: "clip.mp4",
        content_type: "video/mp4"
    )

    assert clip.valid?
    assert clip.video.attached?

    video_url = Rails.application.routes.url_helpers.rails_blob_path(clip.video, only_path: true) # /rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--33be3050889fef6e0563a56fd91129678bb199b4/clip.mp4
    assert_match /\/clip\.mp4/, video_url

    # url_for(clip.video) # for redirect links
    # rails_blob_path(clip.video, disposition: "attachment") # for downloads links
  end

  test "#relative_url" do
    clip = clips(:regular_clip)
    file = Rails.root.join('test', 'fixtures', 'files', 'white_clip.mp4')
    clip.video.attach(
        io: File.open(file),
        filename: "clip.mp4",
        content_type: "video/mp4"
    )

    assert_match /\/clip\.mp4/, clip.relative_url
  end

  test "rarible_url works" do
    clip = Clip.new(
        event: events(:regular_event),
        token_id: "token_id",
        contract_id: "contract_id",
        network_env: "rinkeby",
    )
    clip.save!

    assert_equal "https://rinkeby.rarible.com/token/contract_id:token_id?tab=owners", clip.rarible_url
  end

  test "creator_eth_addr works" do
    clip = Clip.new(
        event: events(:regular_event),
        creator_eth_addr: "0x1233214"
    )
    clip.save!

    assert_equal "0x1233214", clip.creator_eth_addr
  end
end
