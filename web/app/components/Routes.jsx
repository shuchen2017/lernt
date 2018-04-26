import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Courses from './Courses/Courses.jsx';
import CourseDetail from './CourseDetail/CourseDetail.jsx';
import AddCourse from './AddCourse/AddCourse.jsx';
import Profile from './Profile/Profile.jsx';

/**
 *
 * @param {array} courses
 * @param {React.Component} components
 *
 * Wraps {components} with the {courses} prop.
 *
 * @returns Wrapped components
 */
// const decorateWithCourses = (courses, components) =>
//   components.map(Component => () => <Component courses={courses} />);

/**
 *
 * @param {array} courses
 * @param {React.Component} components
 *
 * @returns Wrapped components which will search the given {courses},
 * looking for a course with an id matching one linked to by a route.
 */
// const decorateWithCourseFinder = (courses, components) =>
//   components.map(Component => ({ match }) => {
//     const course = courses.reduce((foundCourse, currentCourse) => (
//       +currentCourse.id === +match.params.id ? currentCourse : foundCourse
//     ), { name: '', id: match.params.id });
//     return <Component {...course} />;
//   });

const Routes = () => {
  // const [CoursesWrapped] = decorateWithCourses(courses, [Courses]);
  // const [CourseDetailWrapped] = decorateWithCourseFinder(courses, [CourseDetail]);
  return (
    <Switch>
      <Route exact path="/" component={Courses} />
      <Route path="/course/:id" component={CourseDetail} />
      <Route exact path="/courses/add" component={AddCourse} />
      <Route path="/profile/:username" component={Profile} />
    </Switch>
  );
};

Routes.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default Routes;
