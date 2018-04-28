import React, { Component, StrictMode } from 'react';
import { connect } from 'react-redux';

import Course from './Course';
import { searchUdemy } from '../../actions/apiSearches';
import { addCourseAsync } from '../../actions/courses';

class AddCourse extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
  }

  handleSearchInputChange = (e, data) => {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  search = () => {
    this.setState({
      searchResults: searchUdemy(this.state.searchTerm),
    });
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
              <div className="input-group">
                <input type="text" className="form-control" value={this.state.searchTerm} onChange={this.handleSearchInputChange} placeholder="search courses..." />
                <span className="input-group-btn">
                  <button className="btn btn-default glyphicon glyphicon-search" type="button" onClick={this.search} />
                </span>
              </div>
            </div>
          </div>
          {
            this.state.searchResults.map(result => (
              <Course addCourseAsync={this.props.addCourseAsync} {...result} />
            ))
          }
        </div>
      </StrictMode>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCourseAsync: course => dispatch(addCourseAsync(course)),
});

export default connect(mapDispatchToProps)(AddCourse);
