Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :user, only: [:index, :create] do
        resources :idea, only: [:create, :update, :show, :index, :destroy]
      end
    end
  end
end
