Rails.application.routes.draw do
  devise_for :creators
  resources :dashboard

  get 'frontend', to: 'frontend#index'
end
