import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Courses from './Courses/Courses.jsx';
import CourseDetail from './CourseDetail/CourseDetail.jsx';
import AddCourse from './AddCourse/AddCourse.jsx';
import Profile from './Profile/Profile.jsx';
import Landing from './Landing/Landing';
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

const firstChild = (props) => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class Routes extends Component {
  // const [CoursesWrapped] = decorateWithCourses(courses, [Courses]);
  // const [CourseDetailWrapped] = decorateWithCourseFinder(courses, [CourseDetail]);
  // NOTE: TO USE COMPONENT IN ROUTES, THE COMPONENT MUST BE A CLASS COMPONENT
  // OTHERWISE, USE RENDER
  state = {

  };


  render = () => (
    <Switch>
      <Route
        exact
        path="/"
        children={({ match, ...rest }) => (
          <TransitionGroup component={firstChild}>
            {match && <Landing {...rest} />}
          </TransitionGroup>
        )} 
      />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/courses/add" component={AddCourse} />
      <Route path="/courses/:id" component={CourseDetail} />
      <Route path="/profile/:username" component={Profile} />
    </Switch>
  );
};

export default Routes;
