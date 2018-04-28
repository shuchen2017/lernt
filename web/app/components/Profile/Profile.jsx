import React, { Component, StrictMode } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
  state = {

  }

  render = () => (
    <StrictMode>
      <div className="container">
        {
          this.props.username === ''
          &&
          <Redirect to="/" />
        }
        <div className="card">
          <div className="card-title">
            <h3 className="text-primary text-center">{this.props.username}</h3>
          </div>
        </div>
      </div>
    </StrictMode>
  )
}

const mapStateToProps = state => ({ ...state.user });

const mapDispatchToProps = dispatch => ({ })

export default connect(mapStateToProps)(Profile);
