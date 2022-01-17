Rails.application.routes.draw do
  resources :users
  resources :dresses
  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"
  post "/dresses/add", to: "dresses#create"
  delete "/dresses/id", to:"dresses#destroy"
  get "dresses/id", to:"dresses#index"
  patch "dresses/id", to:"dresses#update"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
