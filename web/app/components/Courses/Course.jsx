import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Votes from './Votes.jsx';

const Course = ({ title, id, price, instructor, description, course, setActiveCourse }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">
        <Link to={`/courses/${id}`} onClick={() => setActiveCourse(course)} >
          {title}
        </Link>
      </h3>
      <span className="card-text float-right">
        Price: ${price}
      </span>
      <h6 className="card-subtitle text-muted">
        By: {instructor}
      </h6>
      <p className="card-text text-secondary">{description}</p>
      <p className="card-subtitle small text-muted text-center">Click for more details</p>
    </div>
    <Votes count={0} displayLoginWarning={false} handleUpvoteClick={() => console.log('upvote!')} />
  </div>
);

Course.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Course;
