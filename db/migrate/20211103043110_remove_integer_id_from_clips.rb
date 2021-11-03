class RemoveIntegerIdFromClips < ActiveRecord::Migration[6.1]
  def change
    execute "ALTER TABLE ONLY clips ALTER COLUMN integer_id DROP DEFAULT;"
    change_column_null :clips, :integer_id, true
    execute "DROP SEQUENCE IF EXISTS clips_id_seq"
  end
end
