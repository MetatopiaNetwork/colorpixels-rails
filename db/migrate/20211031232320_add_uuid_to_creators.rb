class AddUuidToCreators < ActiveRecord::Migration[6.1]
  def up
    add_column :creators, :uuid, :uuid, default: "gen_random_uuid()", null: false
    rename_column :creators, :id, :integer_id
    rename_column :creators, :uuid, :id
    execute "ALTER TABLE creators drop constraint creators_pkey;"
    execute "ALTER TABLE creators ADD PRIMARY KEY (id);"

  end

  def down
     raise ActiveRecord::ReversibleMigration
  end
end
