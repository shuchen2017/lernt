import React, { Component, StrictMode } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterBar from './FilterBar';
import { setActiveCourse, fetchCoursesAsync, upvoteAsync, downvoteAsync, filterByCategory } from '../../actions/courses';
import Course from './Course.jsx';

class Courses extends Component {

  componentDidMount = () => this.props.fetchCoursesAsync();

  render = () => (
    <StrictMode>
      <FilterBar filterByCategory={this.props.filterByCategory} />
      <div className="container">
        {Object.values(this.props.courses).map(course => (
          <Course
            setActiveCourse={this.props.setActiveCourse}
            {...course}
            course={course}
            key={course.id}
          />
        ))}
      </div>
    </StrictMode>
  );
}

Courses.propTypes = {
  courses: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  courses: state.courses,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setActiveCourse: course => dispatch(setActiveCourse(course)),
  fetchCoursesAsync: () => dispatch(fetchCoursesAsync()),
  upvoteAsync: upvoteInfo => dispatch(upvoteAsync(upvoteInfo)),
  downvoteAsync: downVoteInfo => dispatch(downvoteAsync(downVoteInfo)),
  filterByCategory: category => dispatch(filterByCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
