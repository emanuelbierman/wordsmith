const LocalBaseUrl = 'http://localhost:3001/api/v1';

const MerriamWebsterBaseUrl = 'https://dictionaryapi.com/api/v3/references/thesaurus/json/';

export const fetchWord = word => {
  let url = `${MerriamWebsterBaseUrl}${word.text}?key=6ee4458e-aa4b-4df1-b3fb-ee242052a997`;
  return dispatch => {
    fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(response => dispatch({
      type: 'FETCH_WORD_DATA',
      payload: {
        id: word.id,
        response: response
      }
    }))
    .catch(err => console.log(err));
  };
};
