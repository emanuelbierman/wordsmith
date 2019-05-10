import cuid from 'cuid';
export const cuidFn = cuid;

export default function wordsReducer(state = {
  words: []
}, action) {

  switch (action.type) {

    case 'ADD_WORDS':
      return { ...state, words: action.payload.words };

    case 'REPLACE_WORD':
      let newWord = state.words.find(word => word.id === action.payload.id);
      newWord.text = action.payload.newText;
      {/* find the right word in the words array based on its id and replace it with the new text */}
      return { ...state, words: state.words };

    case 'FETCH_WORD_DATA':
      let word = {
        id: cuidFn(),
        text: action.payload.word.text,
        originalText: action.payload.word.text,
        examples: []
      };

      {/* each example should be formatted with a text property and synonyms array */}
      action.payload.word.examples.map(example => {
        return word.examples << example;
      })

      return { ...state, words: ...state.words, word };

    default:
      return state;
  }
};
