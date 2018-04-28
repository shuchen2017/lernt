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
              <a href={url} target="_blank">
                <h1 className="text-primary text-center">{title}</h1>
              </a>
            </div>
            <div className="d-flex flex-row justify-content-around">
              <div>
                <p className="card-text float-left font-weight-bold">By: {instructor}</p>
              </div>
              <div>
                <p className="card-text float-right font-weight-bold">Price: ${price}</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <a href={url} target="_blank" className="p-4">
                <img src={imageUrl} alt="learn somethin" className="rounded" />
              </a>
              <p className="card-text font-weight-bold">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </StrictMode>
  );
};

const mapStateToProps = state => ({ ...state.activeCourse });

export default connect(mapStateToProps)(CourseDetail);
