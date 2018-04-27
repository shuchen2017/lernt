import React, { Component, StrictMode } from 'react';
import AnimatedWrapper from '../AnimatedWrapper';

class Landing extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('yeet');
    return {};
  }

  state = {

  };

  render = () => (
    <StrictMode>
      <div className="jumbotron">
        <h1 className="display-4"> LERNT </h1>
      </div>
    </StrictMode>
  );
}

export default AnimatedWrapper(Landing);
