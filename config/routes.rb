Rails.application.routes.draw do
  
  get 'live/:live_id', :to => 'frontend#live', as: "live" # pg: needs to be out of unauthenticated block
  
  # clip API
  namespace :api do
    get 'clip/:id', to: "clip#show"
    post 'clip', to: "clip#create"
    patch 'clip/:id', to: "clip#update", as: :clip_update
    get 'event/:live_id', to: "event#show", as: :event_show
    get 'event/clips/:live_id', to: "event#clips", as: :event_clips
  end

  unauthenticated do
    root :to => "pages#index", as: :unauthenticated_root
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
                            
  authenticated :creator  do
    root :to => "creators#show" , as: :authenticated_root
    
    resources :creators,  only: [:show, :edit]
    resources :dashboard

    get 'event/show/:id', to: "event#show", as: :event_show
    get 'event/new', to: "event#new", as: :event_new
    post 'event/create', to: "event#create", as: :event_create
    patch 'event/update', to: "event#update", as: :event_update
  end

  resources :links
  get '/:id' => 'creators#show', as: :social_url
    

end
