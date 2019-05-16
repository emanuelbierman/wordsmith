import cuid from 'cuid';
export const cuidFn = cuid;

export default function wordsReducer(state = {
  words: []
}, action) {
  let word, words;
  switch (action.type) {

    case 'ADD_WORDS':
      words = action.words.map(word => {
        return {
          id: cuidFn(),
          text: word,
          originalText: word,
          examples: []
        };
      })
      return { ...state, words: words };

    case 'REPLACE_WORD':
      // find the right word in the words array based on its id and replace it with the new text
      word = state.words.find(word => word.id === action.payload.id);
      word.text = action.payload.newText;
      return { ...state, words: state.words };

    case 'FETCH_WORD_DATA':
      let response = action.payload.response;
      // find relevant word
      word = state.words.find(word => word.id === action.payload.id);
      // filter out the entry choices that don't match the original text
      response = response.filter(res => res.hwi.hw === word.text);
      // push each matching entry into the word object's examples array
      response.map(entry => word.examples.push(entry));
      // map over each example, format them into an object with extracted data stored as keys, and store it into the current word object's examples array
      word.examples = word.examples.map(entry => {
        return {
          usage: entry.fl,
          sense: entry.def[0].sseq[0][0][1].dt[0][1],
          synonyms: entry.def[0].sseq[0][0][1].syn_list[0].map(syn => syn.wd)
        };
      });
      return { ...state, words: state.words };

    default:
      return state;
  }
};
