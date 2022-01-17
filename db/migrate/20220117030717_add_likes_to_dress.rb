class AddLikesToDress < ActiveRecord::Migration[7.0]
  def change
    add_column :dresses, :likes, :integer, null: false, default: 0
  end
end
