import React from 'react';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const SignupModal = ({
  alertText, 
  alertColor, 
  toggleModal, 
  email, 
  handleChangeEmail, 
  password, 
  handleChangePassword, 
  secondPassword, 
  handleChangeSecondPassword,
  handleSignup,
  swapState,
}) => (
  <div>
    <ModalHeader toggle={toggleModal}>
      Sign Up
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
            onChange={handleChangeEmail}
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
            onChange={handleChangePassword}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword2" className="mr-1">
            Retype Password
          </label>
          <input
            id="inputPassword2"
            type="password"
            value={secondPassword}
            onChange={handleChangeSecondPassword}
          />
        </div>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={handleSignup} >
        Sign Up
      </Button>
      <Button color="neutral" onClick={swapState} >
        Login instead
      </Button>

      <Button color="secondary" onClick={toggleModal} >
        Cancel
      </Button>
    </ModalFooter>
  </div>
);

export default SignupModal;
