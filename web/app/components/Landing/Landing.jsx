import React, { Component, StrictMode } from 'react';
import AnimatedWrapper from '../AnimatedWrapper';
import { getCategories } from '../../actions/categories';

class Landing extends Component {

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

export default Landing;
