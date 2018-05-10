class CreateIdeas < ActiveRecord::Migration[5.1]
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :body
      t.integer :ups, null: false, default: 0
      t.integer :downs, null: false, default: 0

      t.timestamps
    end
  end
end
