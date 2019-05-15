import cuid from 'cuid';
export const cuidFn = cuid;

export default function wordsReducer(state = {
  words: []
}, action) {

  switch (action.type) {

    case 'ADD_WORDS':
      let newWords = action.words.map(word => {
        return {
          id: cuidFn(),
          text: word,
          originalText: word,
          examples: []
        };
      })
      return { ...state, words: newWords };

    case 'REPLACE_WORD':
      let newWord = state.words.find(word => word.id === action.payload.id);
      newWord.text = action.payload.newText;
      {/* find the right word in the words array based on its id and replace it with the new text */}
      return { ...state, words: state.words };

    case 'FETCH_WORD_DATA':
      let response = action.payload.response;
      let word = state.words.find(word => word.id === action.payload.id);
      // let entries = response.filter(data => !Object.getOwnPropertyNames(data).includes('hom'));

      // filter out the entry choices that don't match the original text
      response = response.filter(res => res.hwi.hw === word.text);
      // push each matching entry into the word object's examples array
      response.map(entry => word.examples.push(entry));

      // Generate a unique list of uses for the word - noun, adjective, etc
      // let uses = Array.from(new Set(response.map(data => data.fl)));
      // uses.forEach(use => {
        // find the first entry that matches the word's use
        // let example = response.find(data => (data.fl === use));
        // this entry gets
        // return word.examples.push(example);
      // })

      word.examples.map(entry => {
        // filter out senses that are parenthesized
        // let senses = entry.def[0].sseq.filter(s => s[0][0] !== "pseq");
        // filter out senses that don't have a "sense" key at the next top level
        // senses = senses.filter(s => s[0][0] === "sense");
        // senses = senses.map(sense => sense[0][1].dt[0][1] );
        // {
        //   text: '',
        //   synonyms: []
        // }
        return {
          partOfSpeech: entry.fl,
          senses: entry.def[0].sseq
        }
      })
      {/* TODO: map over each example, format them into an object with a text property and synonyms array, and shove it into the current word object's examples array */}
      debugger;
      return { ...state, words: state.words };

    default:
      return state;
  }
};
