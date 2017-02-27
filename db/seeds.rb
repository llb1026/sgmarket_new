# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all

30.times do
  Post.create!(
      {
          user_id: User.all.ids.sample,
          title: "#{Faker::Internet.domain_word}",
          category: ['의류', '화장품', '서적', '쿠폰/티켓', '기타'].sample,
          price: rand(100..10000),
          contact: "#{Faker::PhoneNumber.cell_phone}",
          detail: "#{Faker::Hacker.say_something_smart}"
      }
  )
end