class Api::ClipController < Api::AuthController
  before_action :event_is_present, only: [:create]
  
  def index
    clips = Clip.all
    render json: clips, status: 200 
  end

  # GET api/clip/:id
  def show
    clip = Clip.find_by_id(params[:id])
    render json: { error: "not found"}, status: 404 and return if clip.nil?
    # puts rails_blob_path(clip.video, disposition: "attachment")
    render json: clip, :methods => [:service_url, :relative_url], status: 200
  end

  # POST /api/clip
  def create
    clip = Clip.create!(event: current_event)
    ClipLiveSegmentJob.perform_later(clip, custom_stream_url)
    render json: clip, status: 200
  end

  # PATCH /api/clip/:id
  def update
    clip = Clip.find(params[:id])
    clip.update!(permit_update_params)
    render json: clip
  end

  private

  def permit_update_params
    params.permit(:minter_eth_addr, :token_id, :contract_id, :network_env, :tag_list, :rarity_list)
  end

  def event_is_present
    render status: :unauthorized, json: { error: "live_id is missing." } unless current_event.present?
  end

  def custom_stream_url
    params[:stream_url]
  end
end