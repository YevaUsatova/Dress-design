Rails.application.routes.draw do
  resources :users
  resources :dresses
  post "/sessions", to: "sessions#create" 
  delete "/sessions", to: "sessions#destroy"
  get "/dresses", to: "dresses#index"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
