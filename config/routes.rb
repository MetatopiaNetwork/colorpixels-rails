Rails.application.routes.draw do
  get 'frontend', to: 'frontend#index'
  
  devise_for :creators path: '',
              path_names: { sign_in: 'login', sign_out: 'logout',
                            password: 'secret',
                            unlock: 'unlock', registration: 'register'} ,
               controllers: { registrations: 'creators/registrations',
                             sessions: 'creators/sessions',
                             confirmations: 'confirmations'
                           }
                            
  authenticated :user  do
    root :to => "creators#show" , as: :authenticated_root
    
    resources :dashboard

  end
    
 

  


end
