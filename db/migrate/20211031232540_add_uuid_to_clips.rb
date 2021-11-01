class AddUuidToClips < ActiveRecord::Migration[6.1]
  def up
    add_column :clips, :uuid, :uuid, default: "gen_random_uuid()", null: false
    rename_column :clips, :id, :integer_id
    rename_column :clips, :uuid, :id
    execute "ALTER TABLE clips drop constraint clips_pkey;"
    execute "ALTER TABLE clips ADD PRIMARY KEY (id);"

  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
