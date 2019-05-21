import cuid from 'cuid';
export const cuidFn = cuid;

export default function wordsReducer(state = {
  words: [],
  loading: false
}, action) {
  let word, words, selectedWord, response;
  switch (action.type) {

    case 'ADD_WORDS':
      words = action.words.split(' ');
      words = words.map((text, index) => {
        return {
          id: cuidFn(),
          index: index,
          text: text,
          originalText: text,
          isFetched: false,
          message: '',
          options: []
        };
      })
      console.log('new words: ' + words.map(w=>' '+w.text+' ') );

      return { ...state, words: [...words] };

    case 'BEGIN_FETCH_WORD':
      console.log('beginning fetch, setting loading to true');
      console.log(state)
      return { ...state, loading: true };

    case 'REPLACE_WORD':
      // find the right word in the words array based on its id and replace it with the new text
      selectedWord = state.words.filter(word => word.id === action.payload.id)[0];
      selectedWord.text = action.payload.newText;
      console.log(`replaced word from ${selectedWord.originalText} to  ${selectedWord.text}`)
      // add selectedWord back into state
      return { ...state, words: [...state.words] };

    case 'UPDATE_EXTERNAL_WORD':
      response = action.payload.response;
      // find relevant word obect in texts array
      selectedWord = state.words.filter(word => word.id === action.payload.id)[0];
      // filter out the response entry choices that don't match the original text
      response = response.filter(res => res.hwi.hw === selectedWord.text);
      // push each matching entry into the word object's examples array
      response.map(entry => selectedWord.options.push(entry));
      // map over each example, format them into an object with extracted data stored as keys, and store it into the current word object's examples array
      selectedWord.options = selectedWord.options.map(entry => {
        return {
          id: cuidFn(),
          usage: entry.fl,
          sense: entry.def[0].sseq[0][0][1].dt[0][1],
          synonyms: entry.def[0].sseq[0][0][1].syn_list[0].map(syn => syn.wd)
        };
      });
      if (selectedWord.options.length > 0) {
        selectedWord.isFetched = true;
      }
      console.log(`new external word has ${selectedWord.options.length} examples`);
      console.log('its isFetched property should be true: ' + selectedWord.isFetched);
      return { ...state, words: [...state.words] };

    case 'UPDATE_API_WORD':
      response = action.payload.response;
      selectedWord = state.words.filter(word => word.id === action.payload.id)[0];
      // add info to selectedWord:
      selectedWord.options = response.data.attributes.options.map(option => {
        return {
          id: cuidFn(),
          usage: option.usage,
          sense: option.sense,
          synonyms: option.synonyms.split(',')
        };
      });
      if (selectedWord.options.length > 0) {
        selectedWord.isFetched = true;
      }
      console.log(`new api word has ${selectedWord.options.length} examples`);
      console.log('its isFetched property should be true: ' + selectedWord.isFetched);
      return { ...state, words: [...state.words] };

    case 'END_FETCH_WORD':
      console.log('ending fetch, setting loading to false');
      return { ...state, words: [...state.words], loading: false };

    // case 'EXPAND_WORD':
    //   word = state.words.find(word => word.id === action.payload.id);
    //   word.expanded = true;
    //   console.log('word should be expanded:  ' + word.expanded);
    //   return { ...state, words: state.words };

    // case 'ABORT_FETCH_WORD':
    //   selectedWord = state.words.filter(word => word.id === action.payload.id)[0];
    //   selectedWord.message = 'This word is too short to look up.'
    //   return { ...state, words: [...state.words] }

    default:
      return state;
  }
};
