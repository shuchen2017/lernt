import { SET_ACTIVE_COURSE } from '../components/Courses/actions';
import initialState from './initialState';

const activeCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_COURSE:
      return Object.assign({}, state, { activeCourse: state.courses.id });
    default:
      return state;
  }
};

export default activeCourseReducer;
