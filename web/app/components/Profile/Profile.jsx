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
        <div className="card text-center">
          <div className="card-body">
            <div className="card-title">
              <h3 className="text-primary text-center">{this.props.username}</h3>
            </div>
            <div className="card-text">
              View your profile information and upvoted courses!
            </div>
            <br />
            <div className="row">
              <div className="col-sm-6">
                <h4>Upvoted courses</h4>
              </div>
              <div className="col-sm-6">
                <h4>Profile information</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StrictMode>
  )
}

const mapStateToProps = state => ({ ...state.user });

const mapDispatchToProps = dispatch => ({ })

export default connect(mapStateToProps)(Profile);
