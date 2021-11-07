class Api::EventController < Api::AuthController
  before_action :event_is_present

  def index
    events = Event.all
    render json: events, status: 200
  end

  # GET api/event/:live_id
  def show
    render json: current_event, status: 200
  end

  # GET api/event/clips/:live_id
  def clips
    render json: current_event.clip.order(id: :desc), :methods => [:service_url, :relative_url, :rarible_url], status: 200
  end

  private

  def event_is_present
    render status: :unauthorized, json: { error: "live_id is missing." } unless current_event.present?
  end

  def custom_stream_url
    params[:stream_url]
  end
end