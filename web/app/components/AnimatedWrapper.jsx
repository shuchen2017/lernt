import React, { Component, StrictMode } from 'react';
import * as Animated from 'animated/lib/targets/react-dom';

const AnimatedWrapper = WrappedComponent => class AnimatedWrapper extends Component {
  state = {
    animate: new Animated.Value(0),
  };

  componentWillAppear = (cb) => {
    //Animated.spring(this.state.animate, { toValue: 1 }).start();
    cb();
  }

  componentWillEnter = (cb) => {
    //setTimeout(() => Animated.spring(this.state.animate, { toValue: 1 }).start(), 250);
    cb();
  }

  componentWillLeave = (cb) => {
    //Animated.spring(this.state.animate, { toValue: 0 }).start();
    setTimeout(() => cb(), 175);
  }

  render = () => {
    return (
      <StrictMode>
        <Animated.div >
          <WrappedComponent {...this.props} />
        </Animated.div>
      </StrictMode>
    );
  }
};

export default AnimatedWrapper;
