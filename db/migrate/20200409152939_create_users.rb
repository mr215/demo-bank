class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.decimal :balance precision: 8, scale: 2, default: 0

      t.timestamps
    end
  end
end
