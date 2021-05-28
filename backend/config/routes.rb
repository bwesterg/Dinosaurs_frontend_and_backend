Rails.application.routes.draw do
  resources :dinosaurs, only: [:index, :create]
end
