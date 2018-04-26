import axios from 'axios';

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP';

const login = user => ({
  type: LOGIN,
  user,
});

const signup = user => ({
  type: SIGNUP,
  user,
});

const loginAsync = (userInfo) => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/login');
    dispatch(data);
  };
};

const signupAsync = (userInfo) => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/signup');
    dispatch(data);
  };
};

module.exports = {
  loginAsync,
  LOGIN,
  signupAsync,
  SIGNUP,
};
