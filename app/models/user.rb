class User < ApplicationRecord
    has_many :dresses
    validates :username, presence: true, length: {minimum: 3, maximum: 10}, uniqueness: true
    has_secure_password
    
   
end
