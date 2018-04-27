import axios from 'axios';

const ADD_COURSE = 'ADD_COURSE';

const addCourse = course => ({
  type: ADD_COURSE,
  course
});

const addCourseAsync = (course) => {
  return async (dispatch) => {
    const { status } = await axios.post('/api/courses', {
      params: {
        course,
      },
    });
    // TODO: Figure out what to do with resolve maybe?
  };
};

module.exports = {
  addCourseAsync,
};
