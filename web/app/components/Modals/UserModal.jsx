import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import { connect } from 'react-redux';

import LoginModal from './LoginModal.jsx';
import SignupModal from './SignupModal.jsx';
import { loginAsync, signupAsync } from '../../actions/user';


class UserModal extends Component {
  state = {
    email: '',
    password: '',
    secondPassword: '',
    modalType: this.props.modalClicked,
    alertText: '',
    alertColor: 'text-success',
  };

  handleChangeEmail = e => this.setState({ email: e.target.value });

  handleChangePassword = e => this.setState({ password: e.target.value });

  handleChangeSecondPassword = e => this.setState({ secondPassword: e.target.value });

  swapState = () => (
    this.state.modalType === 'Sign Up'
      ? this.setState({ modalType: 'Login' })
      : this.setState({ modalType: 'Sign Up' })
  );

  render = () => (
    <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
      {
        this.state.modalType === 'Sign Up'
        ? <SignupModal />
        : <LoginModal />
      }
    </Modal>
  );
}

const mapDispatchToProps = dispatch => ({
  loginAsync: userInfo => dispatch(loginAsync(userInfo)),
  signupAsync: userInfo => dispatch(signupAsync(userInfo)),
});

export default connect(mapDispatchToProps)(UserModal);
