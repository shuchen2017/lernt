import React from 'react';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const LoginModal = ({
  alertText, 
  alertColor, 
  toggleModal, 
  username,
  handleChangeUsername,
  email, 
  handleChangeEmail, 
  password, 
  handleChangePassword, 
  secondPassword, 
  handleChangeSecondPassword,
  handleLogin,
  toggleModalType,
}) => (
  <div>
    <ModalHeader toggle={toggleModal}>
      Login
      <span style={{ fontWeight: 'bold' }} className={alertColor}>
        {alertText}
      </span>
    </ModalHeader>
    <ModalBody>
      <form>
        <label htmlFor="inputUsername" className="mr-1">
          Username
        </label>
        <div className="input-group">
          <input
            className="form-control"
            id="inputUsername"
            type="username"
            value={username}
            onChange={e => handleChangeUsername(e)}
          />
        </div>
        <label htmlFor="inputEmail" className="mr-1">
          Email
        </label>
        <div className="input-group">
          <input
            className="form-control"
            id="inputEmail"
            type="email"
            value={email}
            onChange={e => handleChangeEmail(e)}
          />
        </div>
        <label htmlFor="inputPassword1" className="mr-1">
          Password
        </label>
        <div className="input-group">
          <input
            className="form-control"
            id="inputPassword1"
            type="password"
            value={password}
            onChange={e => handleChangePassword(e)}
          />
        </div>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => handleLogin({ username, password })}>
        Login
      </Button>
      <Button color="neutral" onClick={toggleModalType}>
        Sign Up instead
      </Button>
      <Button color="secondary" onClick={toggleModal}>
        Cancel
      </Button>
    </ModalFooter>
  </div>
)

export default LoginModal;
