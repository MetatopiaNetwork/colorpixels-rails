class AddBioToCreator < ActiveRecord::Migration[6.1]
  def change
    add_column :creators, :bio, :text
  end
end
