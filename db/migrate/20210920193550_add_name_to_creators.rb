class AddNameToCreators < ActiveRecord::Migration[6.1]
  def change
    add_column :creators, :name, :string
  end
end
