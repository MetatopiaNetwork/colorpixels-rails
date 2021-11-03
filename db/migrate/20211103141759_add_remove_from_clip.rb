class AddRemoveFromClip < ActiveRecord::Migration[6.1]
  def change
    remove_column :clips, :rarity
  end
end
