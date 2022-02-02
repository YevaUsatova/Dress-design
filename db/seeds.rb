#  Dress.create!(name: "Summer fussion", textile: "silk", features: "Short sleaves with long red collored skirt", designer: "Judy" )
#  Dress.create!(name: "Evening gown", textile: "cotton", features: "Long blue dress with open back", designer: "Judy")

 user = User.create!(username: "Judy", password: "Foster")
 user2 = User.create!(username: "Joe", password: "Gold")
 user.dresses.create!(name: "Summer fussion", textile: "silk", features: "Short sleaves with long red collored skirt", designer: "Judy" )
 user2.dresses.create!(name: "Evening gown", textile: "cotton", features: "Long blue dress with open back", designer: "Joe")
 puts "i am all set"