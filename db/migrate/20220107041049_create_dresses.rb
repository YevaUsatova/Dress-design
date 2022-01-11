class CreateDresses < ActiveRecord::Migration[7.0]
  def change
    create_table :dresses do |t|
      t.string :name
      t.string :textile
      t.string :features
      t.string :designer
      t.integer :user_id

      t.timestamps
    end
  end
end
