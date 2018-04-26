const SET_ACTIVE_COURSE = 'SET_ACTIVE_COURSE';

const setActiveCourse = course => ({
  type: SET_ACTIVE_COURSE,
  course,
});

module.exports = {
  setActiveCourse,
  SET_ACTIVE_COURSE,
};
