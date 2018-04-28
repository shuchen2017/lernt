import React, { Component, StrictMode } from 'react';
import { Link } from 'react-router-dom';
import Votes from './Votes.jsx';
import { handleVote, deleteVoteAsync } from '../../actions/courses';
import { connect } from 'react-redux';

class Course extends Component {
  state = {
    hasVoted: false,
    upVote: false,
    downVote: false,
    displayLoginWarning: false,
    upVotes: this.props.course.upVotes,
    downVotes: this.props.course.downVotes,
    count: this.props.course.upVotes - this.props.course.downVotes
  }

  toggleHasVoted = () => this.setState(prevState => ({ hasVoted: !prevState.hasVoted }));

  handleVote = (userId, courseId, voteType) => {
    if (this.props.user.username === '') {
      this.setState({ displayLoginWarning: true });
      return;
    } else if (!this.state.hasVoted) {
      this.setState({ [voteType]: true, hasVoted: true });
      this.props.handleVote(userId, courseId, voteType);
    } else {
      if (this.state[voteType]) {
        this.setState({ hasVoted: false });
        this.setState({ [voteType]: false });
        this.props.deleteVoteAsync(userId, courseId, voteType);
      } else {
        const notVoteType = voteType === 'upVote' ? 'downVote' : 'upVote';
        this.setState({ [voteType]: true});
        this.setState({ [notVoteType]: false});
        this.props.handleVote(userId, courseId, voteType);
      }
      console.log('fuck off eslint');
    }
    this.setState({ displayLoginWarning: false });
  }

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
          handleVote={this.handleVote}
          {...this.state}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleVote: (userId, courseId, voteType) => dispatch(handleVote(userId, courseId, voteType)),
  deleteVoteAsync: (userId, courseId, voteType) => dispatch(deleteVoteAsync(userId, courseId, voteType)),
});

export default connect(() => ({}), mapDispatchToProps)(Course);
