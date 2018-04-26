const SET_ACTIVE_COURSE = 'SET_ACTIVE_COURSE';

const setActiveCourse = id => ({
  type: SET_ACTIVE_COURSE,
  id,
});

module.exports = {
  setActiveCourse,
  SET_ACTIVE_COURSE,
};
