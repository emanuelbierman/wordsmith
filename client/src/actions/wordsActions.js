const LocalBaseUrl = 'http://localhost:3001/api/v1';
const OxfordBaseUrl = 'https://od-api.oxforddictionaries.com/api/v2';

export const fetchWord = word => {
  // each word has a text attr which gives the word itself
  return dispatch => {
    fetch(`{OxfordBaseUrl}/entries/en-us/{word.text}`)
      .then(response => response.json())
      .then(data => dispatch({
        type: 'FETCH_WORD',
        payload: data
      }))
      .catch(err => err)
  };
};
