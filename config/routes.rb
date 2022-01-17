Rails.application.routes.draw do
  resources :users
  resources :dresses
  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"
  post "/dresses/add", to: "dresses#create"
  delete "/dresses/id", to:"dresses#destroy"
  get "dresses", to:"dresses#index"
  patch "dresses/:id/like", to:"dresses#increment_like"

end
