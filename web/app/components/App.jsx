import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Routes from './Routes.jsx';

class App extends Component {
  
  state = {
    user: ''
  }

  render = () =>  {
    return (
      <div id="content">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
