class CreateClips < ActiveRecord::Migration[6.1]
  def change
    create_table :clips do |t|
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
