import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Course = ({ name, id, price, author, setActiveCourse }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">
        <Link to={`/course/${id}`} onClick={setActiveCourse(id)} >
          {name}
        </Link>
      </h3>
      <span className="card-text float-right">
        Price: ${price}
      </span>
      <h6 className="card-subtitle text-muted">
        By: {author}
      </h6>
      <p className="card-text text-secondary">{}</p>
      <p className="card-subtitle small text-muted text-center">Click for more details</p>
    </div>
  </div>
);

Course.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Course;
