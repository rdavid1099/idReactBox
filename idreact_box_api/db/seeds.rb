require 'faker'

TITLES = [
  'Faker::RickAndMorty.location',
  'Faker::Zelda.item',
  'Faker::Pokemon.move'
]

BODIES = [
  'Faker::RickAndMorty.quote',
  'Faker::Simpsons.quote',
  'Faker::StarWars.wookiee_sentence'
]

guest = User.find_by(email: 'guest')
25.times do
  guest.ideas.create(
    title: eval(TITLES[rand(0..(TITLES.length - 1))]),
    body: eval(BODIES[rand(0..(BODIES.length - 1))]),
    ups: rand(0..100),
    downs: rand(0..100),
  )
end
