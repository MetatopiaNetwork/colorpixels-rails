class EventController < ApplicationController
  before_action :authenticate_creator!

  def show
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.create!(
        creator: current_creator,
        name: permitted_params[:name],
        stream_url: permitted_params[:stream_url]
    )
    redirect_to '/'
  end

  private

  def permitted_params
    params.require(:event).permit(:name, :stream_url)
  end
end
