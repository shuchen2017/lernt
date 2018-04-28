import axios from 'axios';

export const AUTHENTICATED = 'AUTHENTICATED';
export const LOGOUT = 'LOGOUT';

const authenticated = user => ({
  type: AUTHENTICATED,
  user,
});

export const logout = () => ({
  type: LOGOUT,
});

const getUserVotes = user => async (dispatch) => {
  const { data: user_votes } = await axios.get(`/api/user/${user.id}`);
  dispatch(authenticated(user_votes));
};

export const loginAsync = userInfo => async (dispatch) => {
  const { data: user } = await axios.post('/api/login', userInfo);
  dispatch(getUserVotes(user));
};

export const signupAsync = userInfo => async (dispatch) => {
  const { data: user } = await axios.post('/api/signup', userInfo);

  dispatch(getUserVotes(user));
};
