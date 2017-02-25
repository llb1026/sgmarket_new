class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  # mount_uploader :image, ImageUploader
  # has_attached_file :image

  validates :title, :category, :price, :detail, :contact,
    presence: true
    
  validates :category,
    inclusion: { in: ['의류', '화장품', '서적', '쿠폰/티켓', '기타'] }

  validates :price,
    numericality: { only_integer: true }
end
