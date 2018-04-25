import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ name }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">{name}</h3>
      <span className="card-text float-right">
        Price: ${}
      </span>
      <h6 className="card-subtitle text-muted">
        By: {}
      </h6>
      <p className="card-text text-secondary">{}</p>
      <p className="card-subtitle small text-muted text-center">Click for more details</p>
    </div>
  </div>
);

Course.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Course;
