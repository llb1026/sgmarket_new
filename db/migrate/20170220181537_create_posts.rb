class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key: true
      t.string :title
      t.string :category
      t.integer :price
      t.text :detail
      t.string :contact
      t.string :image
      t.boolean :done, default: false

      t.timestamps
    end
  end
end
