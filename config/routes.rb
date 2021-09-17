Rails.application.routes.draw do
  resources :dashboard

  get 'frontend', to: 'frontend#index'
end
