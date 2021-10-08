class EventController < ApplicationController
  before_action :authenticate_creator!

  def show
    @event = Event.find_by(id: params[:id], creator: current_creator)
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

  def update
    @event = Event.find(param_id)
    @event.update!(permitted_params)
    redirect_to event_show_path(@event.id)
  end

  private

  def param_id
    params[:event][:id]
  end

  def permitted_params
    params.require(:event).permit(:name, :stream_url)
  end
end
