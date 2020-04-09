# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_list = [
  [ "tim@example.com", 300 ],
  [ "john@example.com", 200 ],
  [ "jane@example.com", 100 ],
]

user_list.each do |email, balance|
  User.create(
    email: email,
    balance: balance,
    password: 'password',
    password_confirmation: 'password'
  )
end
