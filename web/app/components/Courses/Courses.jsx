import React, { Component, StrictMode } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setActiveCourse, fetchCoursesAsync, upvoteAsync, downvoteAsync } from './actions';
import Course from './Course.jsx';

const Courses = ({ courses, setActiveCourse }) => (
  <StrictMode>
    <div className="container">
      {Object.values(courses).map(course => (
        <Course
          setActiveCourse={setActiveCourse}
          {...course}
          key={course.id}
        />
      ))}
    </div>
  </StrictMode>
);

Courses.propTypes = {
  courses: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ courses: state.courses });

const mapDispatchToProps = dispatch => ({
  setActiveCourse: course => dispatch(setActiveCourse(course)),
  fetchCoursesAsync: () => dispatch(fetchCoursesAsync()),
  upvoteAsync: upvoteInfo => dispatch(upvoteAsync(upvoteInfo)),
  downvoteAsync: downVoteInfo => dispatch(downvoteAsync(downVoteInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
