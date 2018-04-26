const Sequelize = require('sequelize');
const { sequelize: db } = require('./index');
const { User, Course, Vote } = require('./Models');

// Add User to db
// Params: username, email, password
const ADD_USER = async (userInfo) => {
  const { username, email } = userInfo;

  const [user, created] = await User.findOrCreate({
    where: {
      [Sequelize.Op.or]: [{ username }, { email }],
    },
    defaults: userInfo,
  });
  return created ? user : undefined;
};

// Add Course
// Params: title. url, instructor, description, price, category, submitted_by: userId
const ADD_COURSE = async (courseInfo) => {
  const { url, submittedBy: submitted_by } = courseInfo;

  const [course, created] = await Course.findOrCreate({
    where: { url },
    defaults: { ...courseInfo, submitted_by },
  });

  return created ? course : undefined;
};

// Changes course up_votes or down_votes count when vote updated
// takes a voteType and changeType, based on that adjusts the
// up_votes and down_votes count of a course
// Accepted changeTypes are 'update', 'create', 'delete'
const CHANGE_COURSE_RANKING = async ({ courseId, voteType, voteChangeType }) => {
  const voteCategory = voteType === 'upVote' ? 'up_votes' : 'down_votes';

  const course = await Course.findOne({ where: { id: courseId } });

  const oppositeCategory = voteCategory === 'up_votes' ? 'down_votes' : 'up_votes';

  switch (voteChangeType) {
    case 'update':
      course.decrement({ [oppositeCategory]: 1 });
      course.increment({ [voteCategory]: 1 });
      break;
    case 'create':
      course.increment({ [voteCategory]: 1 });
      break;
    case 'delete':
      course.decrement({ [voteCategory]: 1 });
      break;
    default:
      break;
  }
};

// Add or Update Votes
// Params: userId, courseId, voteType
// voteType must be 'upVote' or 'downVote'
const ADD_VOTE = async (voteInfo) => {
  const { userId: user_id, courseId: course_id, voteType: vote_type } = voteInfo;

  // Find previous upvotes / downvotes for a course
  // if registering new vote, ++ or --
  // if updating, -- opposite voteType, ++ new Vote type

  const [vote, created] = await Vote.findOrCreate({
    where: {
      [Sequelize.Op.and]: [{ user_id }, { course_id }],
    },
    defaults: { user_id, course_id, vote_type },
  });
  if (created) {
    console.log(`${vote.vote_type} successfully added`);
  } else {
    await vote.update({ vote_type });
    console.log('updated!');
  }

  const voteChange = {
    courseId: course_id,
    voteType: vote_type,
    voteChangeType: created ? 'create' : 'update',
  };

  CHANGE_COURSE_RANKING(voteChange);

};

// Delete Vote
// Params: userId, courseId, voteType - 'upVote' or 'downVote'
const DELETE_VOTE = async (voteInfo) => {
  const { userId: user_id, courseId: course_id, voteType: vote_type } = voteInfo;

  const affectedRows = await Vote.destroy({
    where: {
      [Sequelize.Op.and]: [{ user_id }, { course_id }],
    },
  })
  if (affectedRows === 0) {
    console.log("couldn't find that vote");
  } else {
    const voteChange = {
      courseId: course_id,
      voteType: vote_type,
      voteChangeType: 'delete',
    };

    CHANGE_COURSE_RANKING(voteChange);
    console.log('rows deleted', affectedRows);
  }
};

const GET_COURSES = () => Course.findAll();

module.exports = {
  ADD_USER,
  ADD_COURSE,
  CHANGE_COURSE_RANKING,
  ADD_VOTE,
  DELETE_VOTE,
  GET_COURSES,
};
