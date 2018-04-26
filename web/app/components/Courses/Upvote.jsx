import React, { Fragment } from 'react';

const Upvote = ({ count, displayLoginWarning, handleUpvoteClick }) => (
  <div className="card-footer bg-secondary">
    <button
      type="button"
      className="btn btn-muted"
      onClick={handleUpvoteClick}
    >
      <i className="fas fa-chevron-up" />
    </button>
    <span className="card-text text-light ml-2">
    Upvote Count: {count}
    </span>
    {
      displayLoginWarning &&
      <span className="text-warning space-span-left">
        Please log in to vote!
      </span>
    }
  </div>
);

export default Upvote;
