import React from 'react';
import PropTypes from 'prop-types';

const Course =
({ addCourseAsync, title, price, instructor, description, link, imageUrl, rating, createdAt }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <span className="card-text float-right">
        Price: ${price}
      </span>
      <h6 className="card-subtitle text-muted">
        By: {instructor}
      </h6>
      <p className="card-text text-secondary">{description}</p>
      <p className="card-subtitle small text-muted text-center">Created: {createdAt}</p>
    </div>
    <p className="card-subtitle small text-muted">Add this course
      <span>
        <button
          className="btn btn-default"
          type="button"
          onClick={() => addCourseAsync({
            title,
            price,
            instructor,
            description,
            link,
            imageUrl,
            rating,
            createdAt,
          })}>Add this course</button>
      </span>
    </p>
  </div>
);

Course.propTypes = {
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Course;