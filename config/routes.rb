Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  resources :posts
  resources :images
  resources :links do
    member do
      put "like", to: "posts#upvote"
      put "dislike", to: "posts#downvote"
    end
  end
  devise_for :users

  root 'posts#index'
  get '/clothes' => 'posts#clothes'
  get '/cosmetic' => 'posts#cosmetic'
  get '/book' => 'posts#book'
  get '/coupon' => 'posts#coupon'
  get '/etc' => 'posts#etc'
  get '/mypage' => 'posts#mypage'
  get '/notice' => 'posts#notice'
  post '/write_comment' => 'posts#write_comment'
  get 'delete_comment/:comment_id' => 'posts#delete_comment'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
