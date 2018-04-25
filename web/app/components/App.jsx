import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Routes from './Routes.jsx';

class App extends Component {

  state = {
    user: '',
    categories: ['react', 'angular'],
    courses: [
      {
        name: 'learn react the hard way',
        id: 1234
      },
      {
        name: 'learn angular the hard way',
        id: 12345
      }
    ]
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
