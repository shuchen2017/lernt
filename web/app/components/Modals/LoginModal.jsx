import React from 'react';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const LoginModal = ({
  alertText, 
  alertColor, 
  toggleModal, 
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
        <div className="form-group">
          <label htmlFor="inputEmail" className="mr-1">
            Email
          </label>
          <input
            id="inputEmail"
            type="email"
            value={email}
            onChange={e => handleChangeEmail(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword1" className="mr-1">
            Password
          </label>
          <input
            id="inputPassword1"
            type="password"
            value={password}
            onChange={e => handleChangePassword(e)}
          />
        </div>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={handleLogin}>
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
