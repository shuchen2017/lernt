import React, { Component } from 'react';
import LoginModal from './LoginModal.jsx';
import SignupModal from './SignupModal.jsx';

class UserModal extends Component {
  state = {
    email: '',
    password: '',
    secondPassword: '',
    modalType: this.props.modalClicked,
    alertText: '',
    alertColor: 'text-success',
  };
  
  handleSignup = () => {
    if (this.state.password === this.state.secondPassword && this.state.password.length > 1) {
      new Promise((resolve, reject) => {
        resolve(this.props.addCurrentUser({ username: this.state.email, password: this.state.password }));
      })
        .then(() => {
          this.setState({
            email: '',
            password: '',
            secondPassword: '',
            modalType: 'Login',
            alertText: ' Created! Please Login',
            alertColor: 'text-success',
          });
        })
        .catch(err => console.log(err));
    } else {
      this.setState({
        alertText: ' The passwords need to match!',
        alertColor: 'text-danger',
      });
    }
  }

  handleLogin = () => {
    new Promise((resolve, reject) => {
      resolve(this.props.logInUser({ username: this.state.email, password: this.state.password }));
    })
      .then(() => {
        setTimeout(() => {
          if (this.props.currentUser) {
            this.setState({
              email: '',
              password: '',
              secondPassword: '',
              modalType: 'Login',
            });
            this.props.toggleModal();
          } else {
            this.setState({
              alertText: ' Invalid username/password',
              alertColor: 'text-danger',
            });
          }
        }, 300);
      })
      .catch((err) => {
        this.setState({
          alertText: ': There was an error logging in, please try again',
          alertColor: 'text-danger',
        });
        console.log(err);
      });
  }

  handleChangeEmail = e => this.setState({ email: e.target.value });

  handleChangePassword = e => this.setState({ password: e.target.value });

  handleChangeSecondPassword = e => this.setState({ secondPassword: e.target.value });

  swapState = () => (
    this.state.modalType === 'Sign Up'
      ? this.setState({ modalType: 'Login' })
      : this.setState({ modalType: 'Sign Up' })
  );

  render = () => (
    <Modal isOpen={this.state.isOpen} toggle={this.props.toggle}>
    {this.state.modalType }
    </Modal>
  );
}

export default UserModal;
