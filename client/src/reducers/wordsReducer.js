import cuid from 'cuid';
export const cuidFn = cuid;

export default function wordsReducer(state = {
  words: [],
  loading: false
}, action) {
  let word, words, selectedWord, response, example;
  switch (action.type) {

    case 'ADD_WORDS':
      // split into array and eliminate trailing white space if present
      words = action.words.split(' ').filter(w => w.length > 0);
      // consider switching every instance of 'a' or 'an' to a combined 'a/an'
      words = words.map((text, index) => {
        return {
          id: cuidFn(),
          index: index,
          text: text,
          isFetched: false,
          posted: false,
          options: []
        };
      })
      console.log('new words: ' + words.map(w=>' '+w.text+' ') );
      return { ...state, words: [...words] };

    case 'BEGIN_FETCH_WORD':
      console.log('beginning fetch, setting loading to true');
      console.log(state)
      return { ...state, loading: true };

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
      selectedWord.isFetched = true;
      console.log(`new external word has ${selectedWord.options.length} options`);
      return { ...state, words: [...state.words] };

    case 'UPDATE_API_WORD':
      response = action.payload.response;
      selectedWord = state.words.filter(word => word.id === action.payload.id)[0];
      // add info to selectedWord:
      selectedWord.options = response.options.map(option => {
        return {
          id: cuidFn(),
          usage: option.usage,
          sense: option.sense,
          synonyms: JSON.parse(option.synonyms)
        };
      });
      selectedWord.isFetched = true;
      console.log(`new api word has ${selectedWord.options.length} options`);
      return { ...state, words: [...state.words] };

    case 'END_FETCH_WORD':
      console.log('ending fetch, setting loading to false');
      console.log(state)
      return { ...state, words: [...state.words], loading: false };

    case 'POSTED_WORD':
      selectedWord = state.words.filter(word => word.id === action.payload.id)[0];
      // does the selectedWord match the newly created word?
      if (selectedWord.text === action.payload.response.text && selectedWord.options.length === action.payload.response.options.length) {
        selectedWord.posted = true;
        console.log(`${selectedWord.text} has been saved to backend API or already exists there`)
      }
      return { ...state, words: [...state.words] };

    case 'POST_FAILED':
      selectedWord = state.words.filter(word => word.id === action.payload.id)[0];
      // does the selectedWord match the newly created word?
      if (selectedWord.text === action.payload.response.text && selectedWord.options.length === action.payload.response.options.length) {
        selectedWord.posted = true;
        console.log(`${selectedWord.text} was not saved to the backend API`)
      }
      return { ...state, words: [...state.words] };

    case 'ADD_EXAMPLE':
      example = 'Experiment and swap until your heart is full'
      words = example.split(' ').map((text, index) => {
        return {
          id: cuidFn(),
          index: index,
          text: text,
          isFetched: false,
          posted: false,
          options: []
        };
      })
      return { ...state, words: [...words] };

    default:
      return state;
  }
};
