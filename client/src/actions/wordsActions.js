const LocalBaseUrl = 'http://localhost:3001/api/v1';

const MerriamWebsterBaseUrl = 'https://dictionaryapi.com/api/v3/references/collegiate/json/';

export const fetchWord = word => {
  let url = `${MerriamWebsterBaseUrl}${word.text}?key=13fc9042-8226-4650-b526-bbbb2386848e`;
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
