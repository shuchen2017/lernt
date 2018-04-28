import { AUTHENTICATED, LOGOUT } from '../actions/user';

const initialState = {
  username: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
