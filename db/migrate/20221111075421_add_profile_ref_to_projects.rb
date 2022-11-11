class AddProfileRefToProjects < ActiveRecord::Migration[7.0]
  def change
    add_reference :projects, :profile, null: false, foreign_key: true
  end
end
