export default function wordsReducer(state = {
  words: []
}, action) {
  {/* word object: */}
  let word = {
    text: '',
    examples: {
      text: '',
      synonyms: []
    }
  };

  switch (action.type) {

    case 'REPLACE_WORD':
      word.text = action.payload;
      return { ...state, words: [...state.words, word] };

    default:
      return state;
  }
};
