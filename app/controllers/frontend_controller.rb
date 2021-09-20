class FrontendController < ApplicationController
  def live
    @live_id = params[:live_id]
  end
end
