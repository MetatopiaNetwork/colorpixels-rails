class AddUuidToEvents < ActiveRecord::Migration[6.1]
  def up
    add_column :events, :uuid, :uuid, default: "gen_random_uuid()", null: false
    rename_column :events, :id, :integer_id
    rename_column :events, :uuid, :id
    remove_column :clips, :event_id
    execute "ALTER TABLE events drop constraint events_pkey;"
    execute "ALTER TABLE events ADD PRIMARY KEY (id);"
    add_reference :clips, :event, index: true
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
