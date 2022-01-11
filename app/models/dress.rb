class Dress < ApplicationRecord
     belongs_to :user, optional: true
end
