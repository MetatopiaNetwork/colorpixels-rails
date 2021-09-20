class AddSlugToCreator < ActiveRecord::Migration[6.1]
  def change
    add_column :creators, :slug, :string
    add_index :creators, :slug
  end
end
