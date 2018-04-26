import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import activeCourseReducer from './activeCourseReducer';
import userReducer from './userReducer';

export default combineReducers({
  courses: coursesReducer,
  activeCourse: activeCourseReducer,
  user: userReducer,
}); 