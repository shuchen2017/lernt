import React, { Component } from 'react';
import Course from './Course.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveCourse } from './actions';

const Courses = ({ courses, setActiveCourse }) => (
  <div>
    {courses.map(course => (
      <Course
        setActiveCourse={setActiveCourse}
        name={course.name}
        id={course.id}
        price={course.price}
        author={course.author}
        key={course.id}
      />
    ))}
  </div>
);

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ courses: [...state.courses] });

const mapDispatchToProps = dispatch => ({ setActiveCourse: id => dispatch(setActiveCourse(id)) });

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
