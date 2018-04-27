import axios from 'axios';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

const login = user => ({
  type: LOGIN,
  user,
});

const signup = user => ({
  type: SIGNUP,
  user,
});

export const loginAsync = (userInfo) => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/login');
    dispatch(data);
  };
};

export const signupAsync = (userInfo) => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/signup');
    dispatch(data);
  };
};