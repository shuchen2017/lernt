import axios from 'axios';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';

const login = user => ({
  type: LOGIN,
  user,
});

const signup = user => ({
  type: SIGNUP,
  user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginAsync = (userInfo) => {
  return async (dispatch) => {
    const { data: user } = await axios.post('/api/login', userInfo);
    dispatch(login(user));
  };
};

export const signupAsync = (userInfo) => {
  return async (dispatch) => {
    const { data: user } = await axios.post('/api/signup', userInfo);
    dispatch(signup(user));
  };
};