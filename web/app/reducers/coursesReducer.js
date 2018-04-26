import { FETCH_COURSES } from '../components/Courses/actions';

const initialState = {};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return Object.assign({}, state, { ...action.courses });
    default:
      return state;
  }
};

export default coursesReducer;
