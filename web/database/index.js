const Sequelize = require('sequelize');

// TODO: Create DB if not exists
const database = 'lernt';
const sequelize = new Sequelize({
  database,
  host: process.env.PGHOST,
  username: process.env.PGUSER,
  password: null,
  dialect: 'postgres',
});

// Verify connection made
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

exports.sequelize = sequelize;
