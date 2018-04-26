import React, { Component } from 'react';
import LoginModal from './LoginModal.jsx';
import SignupModal from './SignupModal.jsx';
import { Modal } from 'reactstrap';

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

export default UserModal;
