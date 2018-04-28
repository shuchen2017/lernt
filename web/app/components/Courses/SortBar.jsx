import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategoriesAsync } from '../../actions/categories';

class SortBar extends Component {
  render() {
    const { changeSortType } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary rounded shadow-sm">
        <a className="navbar-brand">Sort By:</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => changeSortType('')}>
              <a className="nav-link" href="#">
                Unsorted <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item" onClick={() => changeSortType('highest')}>
              <a className="nav-link" href="#">
                Highest Rated <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item" onClick={() => changeSortType('lowest')}>
              <a className="nav-link" href="#">
                Lowest Rated <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item" onClick={() => changeSortType('expensive')}>
              <a className="nav-link" href="#">
                Highest Priced <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item" onClick={() => changeSortType('cheapest')}>
              <a className="nav-link" href="#">
                Lowest Priced <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SortBar;
