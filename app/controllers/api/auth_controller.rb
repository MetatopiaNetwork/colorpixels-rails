class Api::AuthController < ActionController::API

  protected

  def current_live_id
    params[:live_id]
  end

  def current_event
    @current_event ||= Event.find_by_live_id(current_live_id)
  end
end
