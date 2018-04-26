import React, { Component, StrictMode } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CourseDetail = ({title, id, price, instructor, description, url, setActiveCourse}) => {
  console.log(title);
  return (
    <StrictMode>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <button
                className="btn btn-primary btn-icon btn-icon-mini btn-round text-center float-left"
              >
                <Link to="/courses/">
                  <i className="fas fa-arrow-left" style={{color: "white"}}/>
                </Link>
              </button>
              <h1 className="text-primary text-center">{title}</h1>
            </div>
            <p className="card-text float-left text-secondary">
              By: {instructor}
            </p>
            <p className="card-text float-right text-secondary">
              Price: ${price}
            </p>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title={title}
                className="embed-responsive-item"
                allowFullScreen
                src={url}
              />
            </div>
            <a>
              {}
            </a>
            <p className="card-text text-secondary">{description}</p>
          </div>
        </div>
      </div>
    </StrictMode>
  );
};


const mapStateToProps = state => ({ ...state.activeCourse });

export default connect(mapStateToProps)(CourseDetail);
