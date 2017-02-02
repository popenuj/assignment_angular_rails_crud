Rails.application.routes.draw do

  devise_for :users

  root 'static_pages#index'

  resources :static_pages

  scope :api do
    scope :v1 do
      resources :pins
    end
  end

end
