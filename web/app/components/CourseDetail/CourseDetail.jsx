import React, { Component, StrictMode } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CourseDetail = ({
  title,
  id,
  price,
  instructor,
  description,
  url,
  imageUrl,
  setActiveCourse,
}) => {
  console.log(title);
  return (
    <StrictMode>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <button className="btn btn-primary btn-icon btn-icon-mini btn-round text-center float-left">
                <Link to="/courses/">
                  <i className="fas fa-arrow-left" style={{ color: 'white' }} />
                </Link>
              </button>
              <h1 className="text-primary text-center">{title}</h1>
            </div>
            <div className="row">
              <div>
                <p className="card-text float-left text-secondary">By: {instructor}</p>
              </div>
              <div>
                <p className="card-text float-right text-secondary">Price: ${price}</p>
              </div>
            </div>
            <div className="row">
              <img src={imageUrl} alt="learn somethin" />
            </div>
            <a>{}</a>
            <p className="card-text text-secondary">{description}</p>
          </div>
        </div>
      </div>
    </StrictMode>
  );
};

const mapStateToProps = state => ({ ...state.activeCourse });

export default connect(mapStateToProps)(CourseDetail);
