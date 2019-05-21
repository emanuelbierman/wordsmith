class CreateOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :options do |t|
      t.references :word, foreign_key: true
      t.string :usage
      t.string :sense
      t.string :synonyms
    end
  end
end
