const Sequelize = require('sequelize');
const { sequelize: db } = require('./index');
const { User, Course, Vote } = require('./Models');

// Add User to db
// Params: username, email, password
const ADD_USER = (userInfo) => {
  const { username, email } = userInfo;

  User.findOrCreate({
    where: {
      [Sequelize.Op.or]: [{ username }, { email }],
    },
    defaults: userInfo,
  }).then(([user, created]) => {
    if (created) {
      console.log('new user created', user.username);
    } else {
      console.log(`${user.username} or ${user.email} are in use, try signing in`);
    }
  });
};

// Add Course
// Params: title. url, instructor, description, price, category
const ADD_COURSE = (courseInfo) => {
  const { url } = courseInfo;

  Course.findOrCreate({
    where: { url },
    defaults: courseInfo,
  }).then(([course, created]) => {
    if (created) {
      console.log(`${course.title} successfully added`);
    } else {
      console.log(`${course.url} in database`);
    }
  });
};

// Add or Update Votes
// Params: userId, courseId, voteType
const ADD_VOTE = (voteInfo) => {
  const { userId: user_id, courseId: course_id, voteType: vote_type } = voteInfo;

  Vote.findOrCreate({
    where: {
      [Sequelize.Op.and]: [{ user_id }, { course_id }],
    },
    defaults: { user_id, course_id, vote_type },
  }).then(([vote, created]) => {
    if (created) {
      console.log(`${vote.vote_type} successfully added`);
    } else {
      vote.update({ vote_type }).then(updatedVote => console.log('updated!'));
    }
  });
};

// Delete Vote
// Params: userId, courseId
const DELETE_VOTE = (voteInfo) => {
  const { userId: user_id, courseId: course_id } = voteInfo;

  Vote.destroy({
    where: {
      [Sequelize.Op.and]: [{ user_id }, { course_id }],
    },
  }).then((affectedRows) => {
    if (affectedRows === 0) {
      console.log("couldn't find that vote");
    } else {
      console.log('rows deleted', affectedRows);
    }
  });
};
