class AddSeqToClips < ActiveRecord::Migration[6.1]
  def change
    execute "CREATE SEQUENCE IF NOT EXISTS events_integer_id_seq"
    execute "CREATE SEQUENCE IF NOT EXISTS clips_integer_id_seq"
    execute "CREATE SEQUENCE IF NOT EXISTS creators_integer_id_seq"
  end
end
