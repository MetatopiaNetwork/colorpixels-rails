class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :live_id
      t.string :name
      t.string :image_url 
      t.string :stream_url 
      t.datetime :start_date

      t.timestamps
    end

    add_index :events, :live_id, unique: true
  end
end
