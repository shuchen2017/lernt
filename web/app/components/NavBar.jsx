import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  state = {
    modalSelected: 'Login',
    modal: false,
  }  

  toggleSignupModal = () => this.setState({ modalSelected: 'Sign Up' }, this.toggleModal);

  toggleLoginModal = () => this.setState({ modalSelected: 'Login' }, this.toggleModal);
  

  toggleModal = () => this.setState(prevState => ({ modal: !prevState.modal }));

  render = () => (
    <nav className="navbar navbar-expand-md bg-info">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        {this.props.user !== '' ? (
          <div className="nav-item clickable">
            <a className="nav-link">
              Logout
            </a>
          </div>
        ) : (
          <div className="nav-item clickable">
            <a className="nav-link">
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NavBar;
