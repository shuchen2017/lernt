import React from 'react';
import PropTypes from 'prop-types';

const CourseDetail = ({ name, description, instructor, videoUrl, courseUrl, price }) => (
  <div className="container">
    <div>
      <button
        className="btn btn-primary btn-icon btn-icon-mini btn-round text-center float-left"
      >
        <i className="fas fa-arrow-left" />
      </button>
      <h1 className="text-primary text-center">{name}</h1>
      <p className="text-secondary">
        By {instructor}
      </p>
      <p>Price: ${price} </p>
    </div>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title={name}
        className="embed-responsive-item"
        src={videoUrl}
        allowFullScreen
      />
    </div>
    <a href={courseUrl}>
      {courseUrl}
    </a>
    <p>Description: {description}</p>
  </div>
);

CourseDetail.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  courseUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CourseDetail;
