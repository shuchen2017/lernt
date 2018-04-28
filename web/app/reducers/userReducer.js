import { LOGIN, SIGNUP, LOGOUT } from '../actions/user';

const initialState = {
  username: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
    case LOGIN:
      return action.user;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
