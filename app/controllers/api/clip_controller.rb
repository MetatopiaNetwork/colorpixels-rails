class Api::ClipController < Api::AuthController
  before_action :event_is_present, only: [:create]

  # GET api/clip/:id
  def show
    clip = Clip.find_by_id(params[:id])
    render json: { error: "not found"}, status: 404 and return if clip.nil?
    # puts rails_blob_path(clip.video, disposition: "attachment")
    render json: clip, :methods => :video_url, status: 200
  end

  # POST /api/clip
  def create
    clip = Clip.create!(event: current_event)
    ClipLiveSegmentJob.perform_later(clip, custom_stream_url)
    render json: clip, status: 200
  end

  private

  def event_is_present
    render status: :unauthorized, json: { error: "live_id is missing." } unless current_event.present?
  end

  def custom_stream_url
    params[:stream_url]
  end
end