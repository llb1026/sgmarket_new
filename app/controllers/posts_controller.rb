class PostsController < ApplicationController

  def index
    @posts = Post.order("created_at DESC").limit(10).offset(0)
  end

  def show
    @post = Post.find(params[:id])
    session[:return_to] = request.fullpath
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    # 이미지 추가 코드
    # @author: JH
    uploader0 = ImageUploader.new
    
    # 데이터와 연결된 form_for에서는 2차원 해쉬로 data가 전송됨
    # 즉, <%= f.file_field :image %>는 {post:{image: example.jpg}} 식으로 데이터를 보냄
    # 따라서 form_for을 params로 받으려면 params[:post][:image] 식으로 받아야함
    # **원래는 id말고는 params 쓰는게 아니라하니 그렇게 중요한 개념은 아닐 듯..
    uploader0.store!(params[:post][:image])
    @post.image = uploader0.url


    if @post.save
      redirect_to posts_path, notice: "The post has been successfully created."
    else
      render action: "new"
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      redirect_to session[:return_to], notice: "The post has been successfully updated."
    else
      render action: "edit"
    end
  end

  
  def destroy
    @trash = Post.find(params[:id])
    @trash.destroy
    redirect_to root_path, notice: "The post has been successfully deleted."
  end

  def clothes
    @posts = Post.where(:category => '의류').paginate(page: params[:page], per_page: 12).order('id desc')
  end

  def cosmetic
    @posts = Post.where(:category => '화장품').paginate(page: params[:page], per_page: 12).order('id desc')
  end

  def book
    @posts = Post.where(:category => '서적').paginate(page: params[:page], per_page: 12).order('id desc')
  end

  def coupon
    @posts = Post.where(:category => '쿠폰/티켓').paginate(page: params[:page], per_page: 12).order('id desc')
  end

  def etc
    @posts = Post.where(:category => '기타').paginate(page: params[:page], per_page: 12).order('id desc')
  end

  def mypage
    @post = Post.where(:user => current_user.id).paginate(page: params[:page], per_page: 10).order('id desc')
  end

  def write_comment
    cmt = Comment.new
    cmt.content = params[:comment]
    cmt.post_id = params[:post_id]
    cmt.user_id = params[:user_id]
    cmt.save

    redirect_to :back
  end

  def delete_comment
    delc = Comment.find(params[:comment_id])
    delc.delete

    redirect_to :back
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :category, :title, :price, :detail, :contact, :done) 
    # <%= f.file_field :image %>에서 보내는 데이터를
    # 위에 create 액션에서 params로 직접 받기 위해
    # permit 부분에서 :image 뺌
    # @author: JH
  end

end
