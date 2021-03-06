import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategoriesAsync } from '../../actions/categories';

class CategoriesBar extends Component {
  componentDidMount = () => this.props.getCategoriesAsync();

  render() {
    const { categories, changeDisplayedCategory } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary rounded shadow-sm">
        <a className="navbar-brand" href="#">
          Categories:
        </a>
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
            <li className="nav-item" onClick={() => changeDisplayedCategory('all')}>
              <a className="nav-link" href="#">
                all <span className="sr-only">(current)</span>
              </a>
            </li>
            {categories &&
              categories.map(category => (
                <li className="nav-item" onClick={() => changeDisplayedCategory(category)}>
                  <a className="nav-link" href="#">
                    {category} <span className="sr-only">(current)</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  getCategoriesAsync: () => dispatch(getCategoriesAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesBar);
