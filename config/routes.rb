Rails.application.routes.draw do
  devise_for :users
  root to: "dashboard#index"
  # These supercede other /customers routes, so must
  # come before resource :customers
  get "customers/ng", to: "customers#ng"
  get "customers/ng/*angular_route", to: "customers#ng"
  resources :customers, only: [ :index, :show ]
  #                                     ^^^^^
  get "angular_test" => "angular_test#index"
  get "bootstrap_mockups", to: "bootstrap_mockups#index"
  get "angular_test" => "angular_test#index"
end
