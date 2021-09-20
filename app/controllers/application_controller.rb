class ApplicationController < ActionController::Base
    protect_from_forgery prepend: true 
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected
  
        def configure_permitted_parameters
            attributes = [:name, :username, :email, :avatar, :slug, :password, :password_confirmation, :current_password]
            devise_parameter_sanitizer.permit(:sign_up, keys: attributes)
            devise_parameter_sanitizer.permit(:account_update, keys: attributes)
        end

    private
      
        def creator_not_authorized
          flash[:alert] = "You are not authorized to perform this action."
          redirect_to(request.referrer || root_path)
        end

end
