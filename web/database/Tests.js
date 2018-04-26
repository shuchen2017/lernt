const { User, Course, Vote } = require('./Models');
const {
  ADD_USER, ADD_COURSE, ADD_VOTE, DELETE_VOTE,
} = require('./Queries');

/**
 *
 * ======= SAMPLE DATA ============
 *
 */

// // force: true will drop the table if it already exists
User.sync({ force: true })
  .then(() =>
    User.bulkCreate([
      {
        username: 'mikeee',
        email: 'mike@m.com',
        password: '1234',
      },
      {
        username: 'sam',
        email: 'sam@hotmail.com',
        password: '1111',
      },
    ]))
  .then((user) => {
    Course.sync({ force: true })
      .then(() =>
        Course.bulkCreate([
          {
            title: 'someCourse',
            description: 'You can learn things here',
            url: 'course.com',
            category: 'react',
            submitted_by: 1,
            up_votes: 1,
          },
          {
            title: 'Redux!',
            description: 'cool course',
            url: 'redux.com',
            category: 'redux',
            submitted_by: 2,
            down_votes: 1,
          },
          {
            title: 'Baking',
            description: 'Make cakes',
            url: 'MaryPoppins.com',
            category: 'cooking',
            submitted_by: 2,
            down_votes: 1,
          },
        ]))
      .then((course) => {
        Vote.sync({ force: true }).then(() =>
          Vote.bulkCreate([
            {
              user_id: 2,
              course_id: 1,
              vote_type: 'upVote',
            },
            {
              user_id: 1,
              course_id: 2,
              vote_type: 'downVote',
            },
            {
              user_id: 1,
              course_id: 3,
              vote_type: 'downVote',
            },
          ]));
      });
  });

// // Test user data
// const username = 'M';
// const email = 'aee@m.com';
// const password = '555';

// const user = { username, email, password };

// ADD_USER(user);

const testCourse = {
  title: 'Testing 103',
  url: 'test2.com',
  instructor: '',
  description: 'this is a course also',
  price: 5.5,
  category: 'redux',
  submittedBy: 1,
};

ADD_COURSE(testCourse);

// Add vote
// contains userId, courseId, voteType

// Test Vote
// const testVote = {
//   userId: 1,
//   courseId: 1,
//   voteType: 'upVote',
// };

// ADD_VOTE(testVote);

// Test vote deletion
// DELETE_VOTE({ userId: 1, courseId: 1, voteType: 'upVote' });
