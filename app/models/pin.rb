class Pin < ApplicationRecord
  belongs_to :user

  validates_presence_of :item_name, :buy_sell, :description
  
end
