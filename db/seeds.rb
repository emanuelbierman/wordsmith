# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
word1 = Word.create! text: 'word'
Option.create! word_id: word1.id, usage: 'noun', sense: "a pronounceable series of letters having a distinct meaning especially in a particular field ", synonyms: 'expression,term'
Option.create! word_id: word1.id, usage: 'verb', sense: "to convey in appropriate or telling terms ", synonyms: 'articulate,clothe,couch,express,formulate,phrase,put,say,state'
