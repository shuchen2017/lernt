import React, { Component, StrictMode } from 'react';
import { connect } from 'react-redux';

import { addCourseAsync } from './actions';

class AddCourse extends Component {
  state = {

  }

  render = () => {
    return (
      <StrictMode>
        <div className="container">
          <div className="card">
            <div className="card-title">
              <h3 className="text-primary text-center">ADD A COURSE</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title">
                    TITLE
                  </label>
                  <input type="text" className="form-control" id="title" />
                  <br />
                  <label htmlFor="author">
                    AUTHOR
                  </label>
                  <input type="text" id="author" className="form-control" />
                  <br />
                  <label htmlFor="title">
                    PRICE
                  </label>
                  <input type="text" id="price" className="form-control" />
                  <br />
                  <label htmlFor="description">
                    DESCTIPTION
                  </label>
                  <input type="text" id="description" className="form-control" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </StrictMode>
    );
  }
}

const mapDispatchToProps = course =>

export default AddCourse;
