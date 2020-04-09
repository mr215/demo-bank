Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope :api do
    post 'token' => 'user_token#create'
    
    get 'profile' => 'user#profile'
    post 'send_money' => 'user#send_money'
  end
end
