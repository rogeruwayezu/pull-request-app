Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htmlto
  get "/", to: 'pages#welcome'
  get "payments", to:'payments#index'
  get "payments/new", to: 'payments#new'
end
