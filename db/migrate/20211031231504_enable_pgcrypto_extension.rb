class EnablePgcryptoExtension < ActiveRecord::Migration[6.1]
  def change
    enable_extension 'pgcrypto'
    enable_extension "plpgsql"
    enable_extension "uuid-ossp"
  end
end
