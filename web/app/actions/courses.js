import axios from 'axios';

export const SET_ACTIVE_COURSE = 'SET_ACTIVE_COURSE';
export const FETCH_COURSES = 'FETCH_COURSES';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';

export const setActiveCourse = course => ({
  type: SET_ACTIVE_COURSE,
  course,
});

const fetchCourses = courses => ({
  type: FETCH_COURSES,
  courses,
});

const upvote = course => ({
  type: UPVOTE,
  course,
});

const downvote = course => ({
  type: DOWNVOTE,
  course,
});

export const upvoteAsync = course => ({
  // TODO: FILL IN
});

export const downvoteAsync = course => ({
  // TODO: FILL IN
});

const filterByCategory = category => ({
  type: FILTER_BY_CATEGORY,
  category,
});

export const fetchCoursesAsync = () => async (dispatch) => {
  const { data } = await axios.get('/api/courses');
  dispatch(fetchCourses(data));
};

export const ADD_COURSE = 'ADD_COURSE';

const addCourse = course => ({
  type: ADD_COURSE,
  course,
});

export const addCourseAsync = course => async (dispatch) => {
  const { status } = await axios.post('/api/courses', course);
  // TODO: Figure out what to do with resolve maybe?
};
