class CreateLinks < ActiveRecord::Migration[6.1]
  def change
    create_table :links, id: :uuid do |t|
      t.references :creator, null: false, foreign_key: true, type: :uuid
      t.string :url
      t.string :title

      t.timestamps
    end
  end
end
