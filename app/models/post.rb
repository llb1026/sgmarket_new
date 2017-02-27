class Post < ApplicationRecord
  acts_as_votable
  belongs_to :user
  has_many :comments
  searchable do
    text :title, :default_boost => 2
    text :detail
  end
  # mount_uploader :image, ImageUploader
  # has_attached_file :image

  validates :title, :category, :price, :detail, :contact,
    presence: true
    
  validates :category,
    inclusion: { in: ['의류', '화장품', '서적', '쿠폰/티켓', '기타'] }

  validates :price,
    numericality: { only_ingeter: true, greater_than_or_equal_to: 0 }
end
