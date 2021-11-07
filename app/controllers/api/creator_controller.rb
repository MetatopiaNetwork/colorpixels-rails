class Api::CreatorController < Api::AuthController
    before_action :creator_is_present, only: [:create]
    
    def index 
      creators = Creator.all 
      render json: creators, status: 200
    end 

    # GET api/creator/:id
    def show
      creator = Creator.find_by_id(params[:id])
      render json: { error: "not found"}, status: 404 and return if creator.nil?
      render json: creator, status: 200
    end
  
    # POST /api/creator
    def create
    end
  
    # PATCH /api/creator/:id
    def update
      creator = Creator.find(params[:id])
      creator.update!(permit_update_params)
      render json: creator
    end
  
    private
  
    def permit_update_params
      params.permit(:email, :username, :name, :slug, :bio)
    end
  
    def event_is_present
      render status: :unauthorized, json: { error: "live_id is missing." } unless current_event.present?
    end

  end