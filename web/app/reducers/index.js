import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import activeCourseReducer from './activeCourseReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  categories: categoryReducer,
  courses: coursesReducer,
  activeCourse: activeCourseReducer,
  user: userReducer,
});
