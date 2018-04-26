import React from 'react';
import NavBar from './NavBar.jsx';
import Routes from './Routes.jsx';

const App = () => (
  <div id="content">
    <NavBar />
    <div className="container">
      <Routes />
    </div>
  </div>
);

export default App;
