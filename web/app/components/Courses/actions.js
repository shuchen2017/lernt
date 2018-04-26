import axios from 'axios';

const SET_ACTIVE_COURSE = 'SET_ACTIVE_COURSE';
const FETCH_COURSES = 'FETCH_COURSES';

const setActiveCourse = course => ({
  type: SET_ACTIVE_COURSE,
  course,
});

const fetchCourses = courses => ({
  type: FETCH_COURSES,
  courses,
});

const fetchCoursesAsync = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/courses');
    dispatch(fetchCourses(data));
  }
}

module.exports = {
  setActiveCourse,
  SET_ACTIVE_COURSE,
  fetchCoursesAsync,
  FETCH_COURSES,
};
