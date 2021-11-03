class AddRarityToClip < ActiveRecord::Migration[6.1]
  def change
    add_column :clips, :rarity, :string
  end
end
