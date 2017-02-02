Rails.application.routes.draw do

  devise_for :users

  root 'users#show'

  scope :api do
    scope :v1 do
      resources :pins
    end
  end

end
