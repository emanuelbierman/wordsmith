const LocalBaseUrl = 'http://localhost:3001/api/v1/words';

const MerriamWebsterBaseUrl = 'https://dictionaryapi.com/api/v3/references/thesaurus/json/';

export const fetchWord = word => {
  let api_url = `${LocalBaseUrl}/${word.text}`;
  let merriam_url = `${MerriamWebsterBaseUrl}${word.text}?key=6ee4458e-aa4b-4df1-b3fb-ee242052a997`;

  // call the local api first; if it returns nothing, call external api, and if successful, post to local api
  return dispatch => {
    dispatch({type: 'BEGIN_FETCH_WORD'});
    fetch(api_url, { method: 'GET', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'} })
    .then(response => response.json())
    .then(response => {
      // if the response returns a word, add the info to state:
      if (Object.entries(response).length > 0) {
        dispatch({
            type: 'UPDATE_API_WORD',
            payload: {
              id: word.id,
              response: response
              }
            }
          );
        dispatch({type: 'END_FETCH_WORD'});
      } else {
        // otherwise, fetch from external api:
        fetch(merriam_url, { method: 'GET' })
        .then(response => response.json())
        .then(response => {
          dispatch({
              type: 'UPDATE_EXTERNAL_WORD',
              payload: {
                id: word.id,
                response: response
                }
              }
            );
          dispatch({type: 'END_FETCH_WORD'});
          }
        )
      .catch(err => err)
      }
    }).catch(err => err)
  }
}

export const postWord = word => {
  let api_url = `${LocalBaseUrl}/${word.text}`;
  // post word data to rails API
  return dispatch => {
    fetch(api_url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        word: word
      })
    })
    .then(response => response.json())
    .then(response => {
      if (Object.entries(response).length > 0) {
        dispatch({ type: 'POSTED_WORD', payload: {id: word.id, response: response}})
      } else {
        dispatch({ type: 'POST_FAILED', payload: {id: word.id, response: response}})
      }
    })
    .catch(err => err);
  }
}
