import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Courses from './Courses/Courses.jsx';
import CourseDetail from './CourseDetail/CourseDetail.jsx';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Courses} />
    <Route path="/course/:id" component={CourseDetail} />
  </Switch>
);

export default Routes;
