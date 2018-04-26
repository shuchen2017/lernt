import React, { Component, StrictMode } from 'react';
import PropTypes from 'prop-types';

const CourseDetail = ({name, id}) => (
  <StrictMode>
    <div className="container">
      <div>
        <button
          className="btn btn-primary btn-icon btn-icon-mini btn-round text-center float-left"
        >
          <i className="fas fa-arrow-left" />
        </button>
        <h1 className="text-primary text-center">{name}</h1>
        <p className="text-secondary">
          By {}
        </p>
        <p>Price: ${} </p>
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={name}
          className="embed-responsive-item"
          allowFullScreen
        />
      </div>
      <a>
        {}
      </a>
      <p>Description: {}</p>
    </div>
  </StrictMode>
);

CourseDetail.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CourseDetail;
