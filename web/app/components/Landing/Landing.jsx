import React, { Component, StrictMode } from 'react';
import AnimatedWrapper from '../AnimatedWrapper';
import { getCategoriesAsync } from '../../actions/categories';
import { connect } from 'react-redux';

class Landing extends Component {

  state = {

  };

  componentDidMount = () => this.props.getCategoriesAsync();

  render = () => (
    <StrictMode>
      <div className="jumbotron">
        <h1 className="display-4"> LERNT </h1>
        {this.props.categories.map(category => (
          <p key={category}>{category}</p>
        ))}
      </div>
    </StrictMode>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  getCategoriesAsync: () => dispatch(getCategoriesAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
