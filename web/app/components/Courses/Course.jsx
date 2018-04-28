import React, { Component, StrictMode } from 'react';
import { Link } from 'react-router-dom';
import Votes from './Votes.jsx';
import { handleVote } from '../../actions/courses';
import { connect } from 'react-redux';

class Course extends Component {
  state = {
    hasVoted: false,
    upVote: false,
    downVote: false,
    displayLoginWarning: false,
  }

  toggleHasVoted = () => this.setState(prevState => ({ hasVoted: !prevState.hasVoted }));

  render = () => {
    const { course, user, setActiveCourse, handleVote } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
            <Link to={`/courses/${course.id}`} onClick={() => setActiveCourse(course)} >
              {course.title}
            </Link>
          </h3>
          <span className="card-text float-right">
            Price: ${course.price}
          </span>
          <h6 className="card-subtitle text-muted">
            By: {course.instructor}
          </h6>
          <p className="card-text text-secondary">{course.description}</p>
          <p className="card-subtitle small text-muted text-center">Click for more details</p>
        </div>
        <Votes
          userId={user.id}
          courseId={course.id}
          count={course.upvotes - course.downvotes}
          handleVote={handleVote}
          {...this.state}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleVote: (userId, courseId, voteType) => dispatch(handleVote(userId, courseId, voteType)),
});

export default connect(() => ({}), mapDispatchToProps)(Course);
