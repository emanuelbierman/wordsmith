export default function wordsReducer(state = {
  words: []
}, action) {
  let word = {
    name: ''
  };
  switch (action.type) {

    case 'REPLACE_WORD':
      word.name = action.payload;
      return { ...state, words: [...state.words, word] };

    default:
      return state;
  }
};
