Rails.application.routes.draw do

 
  unauthenticated do
    root :to => "pages#index", as: :unauthenticated_root
    get 'live/:live_id', :to => 'frontend#live'
    resources :creators, only: [:show]
  end
  
  devise_for :creators, path: '',
              path_names: { sign_in: 'login', sign_out: 'logout',
                            password: 'secret',
                            unlock: 'unlock', registration: 'register'} ,
               controllers: { registrations: 'creators/registrations',
                             sessions: 'creators/sessions',
                             confirmations: 'confirmations'
                           }
                            
  authenticated :user  do
    root :to => "creators#show" , as: :authenticated_root
    
    resources :creators,  only: [:show, :edit]
    resources :dashboard
  end
    

end
