class RemoveIntegerIdFromEventsAndCreators < ActiveRecord::Migration[6.1]
  def up
    execute "ALTER TABLE ONLY creators ALTER COLUMN integer_id DROP DEFAULT;"
    change_column_null :creators, :integer_id, true
    execute "DROP SEQUENCE IF EXISTS creators_id_seq"

    execute "ALTER TABLE ONLY events ALTER COLUMN integer_id DROP DEFAULT;"
    change_column_null :events, :integer_id, true
    execute "DROP SEQUENCE IF EXISTS events_id_seq"
  end

end
