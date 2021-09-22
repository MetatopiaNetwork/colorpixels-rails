class CreateClips < ActiveRecord::Migration[6.1]
  def change
    create_table :clips do |t|
      t.references :events
      t.timestamps
    end
  end
end
