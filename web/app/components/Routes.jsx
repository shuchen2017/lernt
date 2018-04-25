import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Courses from './Courses/Courses.jsx';
import CourseDetail from './CourseDetail/CourseDetail.jsx';

const decorateWithCourses = (courses, components) =>
  components.map(Component => () => <Component courses={courses} />);

const Routes = ({ courses }) => {
  const [CoursesWrapped, CourseDetailWrapped] = decorateWithCourses(courses, [Courses, CourseDetail]);
  return (
    <Switch>
      <Route exact path="/" render={CoursesWrapped} />
      <Route path="/course/:id" render={CourseDetailWrapped} />
    </Switch>
  );
};

Routes.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default Routes;
