const host = 'http://127.0.0.1:8111';

function apiCallPost(apiAction, apiParams, apiKey) {
  return window.fetch(`${host}/api${apiAction}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: apiKey,
    },
    body: JSON.stringify(apiParams),
    method: 'POST',
  });
}

function apiCallGet(apiAction, apiParams, apiKey) {
  return window.fetch(`${host}/api${apiAction}${apiParams}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: apiKey,
    },
  });
}

function apiCall(apiKey, apiAction, apiParams, type = 'GET') {
  const fetch = type === 'POST' ? apiCallPost(apiAction, apiParams, apiKey) : apiCallGet(apiAction, apiParams, apiKey);

  return fetch.then((response) => {
    if (response.status !== 200) {
      return Promise.reject(`Network error: ${apiAction} ${response.status}: ${response.statusText}`);
    }
    return Promise.resolve(response);
  });
}

function jsonApiCall(apiKey, apiAction, apiParams, type) {
  return apiCall(apiKey, apiAction, apiParams, type)
    .then(response => response.json());
}

function jsonApiResponse(apiKey, apiAction, apiParams, type) {
  return jsonApiCall(apiKey, apiAction, apiParams, type)
    .then((json) => {
      if (json.code) {
        if (json.code !== 200) {
          return { error: true, code: json.code, message: json.message || 'No error message given.' };
        }
      }
      return { data: json };
    })
    .catch(reason => ({ error: true, message: typeof reason === 'string' ? reason : reason.message }));
}

function getGroups(apiKey) {
  return jsonApiResponse(apiKey, '/serie?nocast=1&tagfilter=63', '');
}

function getSeries(apiKey, id) {
  return jsonApiResponse(apiKey, `/serie?allpics=1&tagfilter=63&level=1&id=${id}`, '');
}

function postLogin(apiKey, data) {
  return jsonApiResponse(apiKey, '/auth', data, 'POST');
}


export default {
  getGroups,
  getSeries,
  postLogin,
};
