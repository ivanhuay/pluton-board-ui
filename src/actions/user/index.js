import history from '../../app-history';
export const requestAuth = () => ({
  type: 'REQUEST_AUTH'
});
export const successAuth = data => ({
  type: 'SUCCESS_AUTH',
  data
});
export const logoutAuth = () => ({
  type: 'LOGOUT_AUTH'
});
export const requestRepositories = () => ({
  type: 'REQUEST_REPOSITORIES'
});
export const successRepositories = (data) => ({
  type: 'SUCCESS_REPOSITORIES',
  data
});
export const errorRepositories = (data) => ({
    type: 'ERROR_REPOSITORIES',
    data
});
export const loginGithub = (code) => {
  return (dispatch) => {
    dispatch(requestAuth());
    return fetch(`${process.env.REACT_APP_API_URL}/api/auth/oauth/github`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({code})
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('profile', JSON.stringify(data.profile));
        dispatch(successAuth(data));
        history.push('/');
      });
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.setItem('token', null);
    localStorage.setItem('profile', null);
    dispatch(logoutAuth());
    history.push('/');
  }
};

export const getRepositories = (boardId) => {
  return (dispatch) => {
    dispatch(requestRepositories());
    const token = localStorage.getItem('token');
    return fetch(`${process.env.REACT_APP_API_URL}/api/integration/repositories`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(successRepositories(data));
      })
      .catch((error)=>{
        dispatch(errorRepositories(error));
      });
  }
}
