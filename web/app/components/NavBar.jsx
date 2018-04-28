import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserModal from './Modals/UserModal';
import { logout } from '../actions/user';

class NavBar extends Component {
  state = {
    modalSelected: 'Login',
    modal: false,
  };

  toggleSignupModal = () => this.setState({ modalSelected: 'Sign Up' }, this.toggleModal);

  toggleLoginModal = () => this.setState({ modalSelected: 'Login' }, this.toggleModal);

  toggleModal = () => this.setState(prevState => ({ modal: !prevState.modal }));

  render = () => {
    console.log(this.state)
    return (
      <nav className="navbar navbar-expand-md bg-info">
        <div className="container">
          <div className="navbar-translate">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
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
          <div className="collapse navbar-collapse navbar-nav ml-auto">
            <div className="nav-item clickable">
              <Link to="/courses/" className="nav-link">
                Courses
              </Link>
            </div>
            <div className="nav-item clickable">
              <Link to="/courses/add" className="nav-link">
                Add Course
              </Link>
            </div>
            {this.props.user.username !== '' ? (
              <Fragment>
                <div className="nav-item clickable">
                  <Link to={`/profile/${this.props.user.username}`} className="nav-link">
                    Profile
                  </Link>
                </div>
                <div className="nav-item clickable">
                  <a className="nav-link" onClick={this.props.logout}>
                    Logout
                  </a>
                </div>
              </Fragment>
            ) : (
              <div className="nav-item clickable">
                <a className="nav-link" onClick={this.toggleModal}>
                  Login
                </a>
              </div>
            )}
            {
              this.state.modal
              &&
              <UserModal 
                isOpen={this.state.modal}
                toggle={this.toggleModal}
                modalType={this.state.modalSelected}
              />
            }
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({ logout: () => dispatch(logout()) });

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
