const Sequelize = require('sequelize');
const { sequelize: db } = require('./index');

// User
const User = db.define('user', {
  username: { type: Sequelize.STRING, unique: true, allowNull: false },
  email: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});

// Course
const Course = db.define('course', {
  title: { type: Sequelize.STRING, allowNull: false },
  url: { type: Sequelize.STRING, allowNull: false, unique: true },
  instructor: { type: Sequelize.STRING, allowNull: true },
  description: { type: Sequelize.STRING, allowNull: true },
  price: { type: Sequelize.FLOAT, allowNull: true, defaultValue: 0 },
  category: { type: Sequelize.STRING, allowNull: false },
  submitted_by: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
    allowNull: false,
  },
  up_votes: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
  down_votes: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
});

// Vote
const Vote = db.define('vote', {
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  course_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Course,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  vote_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = {
  User,
  Course,
  Vote,
};
