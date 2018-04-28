import React, { Component, StrictMode } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoriesBar from './CategoriesBar';
import SortBar from './SortBar';
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
    sortType: '',
  };

  componentDidMount = () => this.props.fetchCoursesAsync();

  changeDisplayedCategory = (displayedCategory) => {
    this.setState({ displayedCategory });
  };

  changeSortType = (sortType) => {
    this.setState({ sortType });
  };

  sortCourses(courses) {
    const { sortType } = this.state;
    const sortableCourses = [...courses];

    switch (sortType) {
      case 'highest':
        return sortableCourses.sort((course1, course2) => {
          const course1Rank = course1.upVotes - course1.downVotes;
          const course2Rank = course2.upVotes - course2.downVotes;

          return course2Rank - course1Rank;
        });
      case 'lowest':
        return sortableCourses.sort((course1, course2) => {
          const course1Rank = course1.upVotes - course1.downVotes;
          const course2Rank = course2.upVotes - course2.downVotes;

          return course1Rank - course2Rank;
        });
      case 'expensive':
        return sortableCourses.sort((course1, course2) => course2.price - course1.price);
      case 'cheapest':
        return sortableCourses.sort((course1, course2) => course1.price - course2.price);

      default:
        return sortableCourses;
    }
  }

  // Add back later:
  // <FilterBar filterByCategory={this.props.filterByCategory} />

  render = () => {
    const filteredCourses =
      this.state.displayedCategory === 'all'
        ? Object.values(this.props.courses)
        : Object.values(this.props.courses).filter(course => course.category === this.state.displayedCategory);

    const sortedCourses = this.sortCourses(filteredCourses);

    return (
      <StrictMode>
        <CategoriesBar changeDisplayedCategory={this.changeDisplayedCategory} />
        <SortBar changeSortType={this.changeSortType} />
        <div className="container">
          {sortedCourses.map(course => (
            <Course
              setActiveCourse={this.props.setActiveCourse}
              user={this.props.user}
              course={course}
              key={course.id}
            />
          ))}
        </div>
      </StrictMode>
    );
  };
}

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
