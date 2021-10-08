class UpdateClips < ActiveRecord::Migration[6.1]
  def change
    add_column :clips, :creator_eth_addr, :string
    add_column :clips, :token_id, :string
    add_column :clips, :contract_id, :string
    add_column :clips, :network_env, :string
  end
end
