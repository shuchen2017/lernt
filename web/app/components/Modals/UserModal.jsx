import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import { connect } from 'react-redux';

import LoginModal from './LoginModal.jsx';
import SignupModal from './SignupModal.jsx';
import { loginAsync, signupAsync } from '../../actions/user';

const modalTypes = {
  LOGIN: 'Login',
  SIGNPUP: 'Sign Up',
};

class UserModal extends Component {

  static getDerivedStateFromProps = (nextProps, prevState) => ({
    ...prevState,
    modalType: nextProps.modalType,
    isOpen: nextProps.isOpen,
  });

  state = {
    email: '',
    password: '',
    secondPassword: '',
    modalType: this.props.modalType,
    isOpen: this.props.isOpen,
    alertText: '',
    alertColor: 'text-success',
  };

  handleChangeEmail = e => this.setState({ email: e.target.value });

  handleChangePassword = e => this.setState({ password: e.target.value });

  handleChangeSecondPassword = e => this.setState({ secondPassword: e.target.value });

  toggleModalType = () => (
    this.state.modalType === modalTypes.SIGNUP
      ? this.setState({ modalType: modalTypes.LOGIN })
      : this.setState({ modalType: modalTypes.SIGNUP })
  );

  render = () => {
    const { email, password, secondPassword, modalType, isOpen, alertText, alertColor } = this.state;
    const { toggle } = this.props;
    const modalProps = {
      alertText,
      alertColor,
      email,
      handleChangeEmail: this.handleChangeEmail,
      password,
      handleChangePassword: this.handleChangePassword,
      secondPassword,
      handleChangeSecondPassword: this.handleChangeSecondPassword,
      toggleModalType: this.toggleModalType,
      toggleModal: toggle, 
    };
    console.log(this.state);
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        {
          modalType === modalTypes.SIGNUP
          ?
          <SignupModal
            handleSignup={this.props.signupAsync}
            {...modalProps}
          />
          :
          <LoginModal
            handleLogin={this.props.loginAsync}
            {...modalProps}
          />
        }
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginAsync: userInfo => dispatch(loginAsync(userInfo)),
  signupAsync: userInfo => dispatch(signupAsync(userInfo)),
});

export default connect(() => {}, mapDispatchToProps)(UserModal);
