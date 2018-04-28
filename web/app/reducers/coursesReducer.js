import { FETCH_COURSES, FILTER_BY_CATEGORY, UPVOTE, DOWNVOTE } from '../actions/courses';

const initialState = {};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPVOTE:
      return state;
    case DOWNVOTE:
      return state;
    case FETCH_COURSES:
      return Object.assign({}, state, { ...action.courses });
    case FILTER_BY_CATEGORY:
      return Object.entries(state).reduce(
        (filteredCourses, [id, currentCourse]) => {
          if (currentCourse.category === action.category)
          { filteredCourses[id] = currentCourse; }
          return filteredCourses;
        }, {});
    default:
      return state;
  }
};

export default coursesReducer;
