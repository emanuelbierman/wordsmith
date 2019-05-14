const LocalBaseUrl = 'http://localhost:3001/api/v1';

const OxfordBaseUrl = 'https://od-api.oxforddictionaries.com/api/v2';

export const fetchWord = word => {
  // words should be lowercase and stripped of whitespace
  let data = {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "app_id": process.env.REACT_APP_OXFORD_API_ID,
      "app_key": process.env.REACT_APP_OXFORD_API_KEY
    }
  };
  return dispatch => {
    fetch(`${OxfordBaseUrl}/thesaurus/en/${word.text}`, data)
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
