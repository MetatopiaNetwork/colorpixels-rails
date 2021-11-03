class CreatorsController < ApplicationController
    before_action :authenticate_creator!, except: [:show]
    before_action :set_creator, only: [:show, :edit, :update, :destroy]
  
    # GET /creators
    # GET /creators.json
    def index
      @creators = Creator.all
    end
  
    # GET /creators/1
    # GET /creators/1.json
    def show
      @creator = current_creator
      # if @creator == current_creator
      #   @creator.links.build
      # end 
    end
  
    # GET /creators/new
    def new
      @creator = Creator.new
    end
  
    # GET /creators/1/edit
    def edit
    end
  
    # POST /creators
    # POST /creators.json
    def create
      @creator = Creator.new(creator_params)
      respond_to do |format|
        if @creator.save 
          format.html { redirect_to @creator, notice: 'Creator was successfully created.' }
          format.json { render :show, status: :created, location: @creator }
        else
          format.html { render :new }
          format.json { render json: @creator.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # PATCH/PUT /creators/1
    # PATCH/PUT /creators/1.json
    def update
      respond_to do |format|
        if @creator.update(creator_params)
          format.html { redirect_to @creator, notice: 'Creator was successfully updated.' }
          format.json { render :vault, status: :ok, location: @creator }
        else
          format.html { render :edit }
          format.json { render json: @creator.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # DELETE /creators/1
    # DELETE /creators/1.json
    def destroy
      @creator.destroy
      respond_to do |format|
        format.html { redirect_to creators_url, notice: 'Creator was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
  
    private
      def set_creator
        @creator = current_creator
        # @creator = params[:id] ? Creator.friendly.find(params[:id]) : current_creator
      end
  
      def creator_params
        params.require(:creator).permit(:name, :username, :email, :avatar, :bio, :slug,
                                        link_attributes: Link.attribute_names.map(&:to_sym).push(:_destory))
      end
  
  end
  