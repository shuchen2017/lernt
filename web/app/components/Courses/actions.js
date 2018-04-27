import axios from 'axios';

const SET_ACTIVE_COURSE = 'SET_ACTIVE_COURSE';
const FETCH_COURSES = 'FETCH_COURSES';
const UPVOTE = 'UPVOTE';
const DOWNVOTE = 'DOWNVOTE';
const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';

const setActiveCourse = course => ({
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
  course
});

const upvoteAsync = course => ({
  // TODO: FILL IN
});

const downvoteAsync = course => ({
  // TODO: FILL IN
});

const filterByCategory = category => ({
  type: FILTER_BY_CATEGORY,
  category,
});

const fetchCoursesAsync = () => (async (dispatch) => {
  const { data } = await axios.get('/api/courses');
  dispatch(fetchCourses(data));
});

module.exports = {
  setActiveCourse,
  SET_ACTIVE_COURSE,
  fetchCoursesAsync,
  FETCH_COURSES,
  upvoteAsync,
  UPVOTE,
  downvoteAsync,
  DOWNVOTE,
  filterByCategory,
  FILTER_BY_CATEGORY,
};
