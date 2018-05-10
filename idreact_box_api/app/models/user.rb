class User < ApplicationRecord
  has_many :ideas
  validates :email, uniqueness: true
end
