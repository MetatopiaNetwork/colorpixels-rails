class Api::EventController < Api::AuthController
  before_action :event_is_present

  # GET api/event/:live_id
  def show
    render json: current_event, status: 200
  end

  private

  def event_is_present
    render status: :unauthorized, json: { error: "live_id is missing." } unless current_event.present?
  end

  def custom_stream_url
    params[:stream_url]
  end
end