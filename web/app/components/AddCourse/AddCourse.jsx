import React, { Component, StrictMode } from 'react';

class AddCourse extends Component {
  state = {

  }

  render = () => {
    return (
      <StrictMode>
        <div className="container">
          <h1 className="text-primary text-center">ADD A COURSE</h1>
          <form>
            <div className="form-group">
              <label htmlFor="title">
                TITLE
              </label>
              <input type="text" className="form-control" id="title" />
            </div>
            <br />
            <label htmlFor="author" className="mr-1">
              AUTHOR
            </label>
            <input type="text" id="author" />
            <br />
            <label htmlFor="title" className="mr-1">
              PRICE
            </label>
            <input type="text" id="price" />
          </form>
        </div>
      </StrictMode>
    );
  }
}

export default AddCourse;
