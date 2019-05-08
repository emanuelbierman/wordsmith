const LocalBaseUrl = 'http://localhost:3001/api/v1';

const OxfordBaseUrl = 'https://od-api.oxforddictionaries.com/api/v2';
let data = {
  method: 'GET',
  headers: {
    "Accept": "application/json",
    "app_id": process.env.REACT_APP_OXFORD_API_ID,
    "app_key": process.env.REACT_APP_OXFORD_API_KEY
  }
};

export const fetchWord = word => {
  // words should be lowercase and stripped of whitespace
  return dispatch => {
    fetch(`{OxfordBaseUrl}/thesaurus/en/{word}`, data)
      .then(response => response.json())
      .then(data => dispatch({
        type: 'FETCH_WORD',
        payload: data
      }))
      .catch(err => err)
  };
};
