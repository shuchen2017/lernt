import React, { Component, StrictMode } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoriesBar from './CategoriesBar';
import FilterBar from './FilterBar';
import {
  setActiveCourse,
  fetchCoursesAsync,
  upvoteAsync,
  downvoteAsync,
  filterByCategory,
} from '../../actions/courses';
import Course from './Course.jsx';

class Courses extends Component {
  state = {
    displayedCategory: 'all',
  };

  componentDidMount = () => this.props.fetchCoursesAsync();

  changeDisplayedCategory = (displayedCategory) => {
    this.setState({ displayedCategory });
  };

  // Add back later:
  // <FilterBar filterByCategory={this.props.filterByCategory} />

  render = () => {
    const filteredCourses =
      this.state.displayedCategory === 'all'
        ? Object.values(this.props.courses)
        : Object.values(this.props.courses).filter(course => course.category === this.state.displayedCategory);

    return (
      <StrictMode>
        <CategoriesBar changeDisplayedCategory={this.changeDisplayedCategory} />
        <div className="container">
          {filteredCourses.map(course => (
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
  };
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
