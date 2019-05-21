const LocalBaseUrl = 'http://localhost:3001/api/v1/words';

const MerriamWebsterBaseUrl = 'https://dictionaryapi.com/api/v3/references/thesaurus/json/';

export const shouldFetchWord = word => {
  let api_url = `${LocalBaseUrl}/${word.text}`;
  let merriam_url = `${MerriamWebsterBaseUrl}${word.text}?key=6ee4458e-aa4b-4df1-b3fb-ee242052a997`;

  // call the local api first; if it returns nothing, call external api, and if successful, post to local api
  return dispatch => {
    dispatch({type: 'BEGIN_FETCH_WORD'});
    fetch(api_url, { method: 'GET', headers: {'Content-Type': 'application/json'} })
    .then(response => response.json())
    .then(response => {
      // if the response returns a word:
      if (response !== null) {
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
          // post word data to rails API
          // set up a conditional here: only post if response object is valid
          fetch(api_url, { method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: response })
          .then(response => response.json())
          .then(response => {
            // is this action even necessary? what does a successful/unsuccessful POST request look like?
            dispatch({ type: 'POSTED_WORD', payload: {id: word.id, response: response}})
          })
          }
        )
      }
    })
  }
}

export const fetchWord = word => {
  let merriam_url = `${MerriamWebsterBaseUrl}${word.text}?key=6ee4458e-aa4b-4df1-b3fb-ee242052a997`;
  return dispatch => {
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
      // post word data in rails API
      }
    )
    .catch(err => console.log(err));
  };
};
