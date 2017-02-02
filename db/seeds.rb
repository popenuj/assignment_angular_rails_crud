LOREM = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, id omnis qui consequuntur quisquam eos dolores et vel, nobis dolore facilis, sapiente officia?"

NUM_USERS = 3
# PIN_PER_USER = 3

puts 'destroying users'
User.destroy_all
puts 'destroying pins'
Pin.destroy_all

NUM_USERS.times do |user|
  new_user = User.create(
    username: "Foo#{user}",
    email: "test#{user}@test.com",
    password: "password",
    password_confirmation: "password"
  )
  new_user.pins.create(
    item_name: "user #{new_user.id - 1}'s item",
    buy_sell: [false, true].sample,
    description: LOREM
  )
end