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
          labels: [],
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

      // Generate a unique list of labels for the word - noun, adjective, etc
      word.labels = Array.from(new Set(response.map(data => data.fl)));
      // find the first occurrence of each of the labels for the word
      word.labels.forEach(label => {
        let example = response.find(data => (data.fl === label));
        return word.examples.push(example);
      })
      {/* TODO: map over each example, format them into an object with a text property and synonyms array, and shove it into the current word object's examples array */}

      return { ...state, words: state.words };

    default:
      return state;
  }
};
