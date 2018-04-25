import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Routes from './Routes.jsx';

class App extends Component {

  state = {
    user: '',
    categories: ['react', 'angular'],
    courses: ['learn react the hard way', 'learn angular the hard way']
  }

  render = () =>  {
    const { categories, courses, user } = this.state;
    return (
      <div id="content">
        <NavBar categories={categories} user={user} />
        <div className="container">
          <Routes courses={courses} />
        </div>
      </div>
    );
  }
}

export default App;
