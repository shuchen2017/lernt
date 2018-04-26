const express = require('express');
const bodyParser = require('body-parser');
const { GET_COURSES, ADD_COURSE } = require('./database/Queries');

const app = express();
const { sequelize: db } = require('./database/index');

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// GET ALL COURSES { id: { courseInfo}, id: ... }
app.get('/api/courses', (req, res) => {
  GET_COURSES()
    .then((courses) => {
      const coursesById = courses.map(course => ({ [course.id]: course }));
      res.send(coursesById);
    })
    .catch(err => res.send('404'));
});

// ADD NEW COURSE
// { title, url, category, submitted_by, optional[ instructor, description, price, ]}
app.post('/api/courses', (req, res) => {
  const courseInfo = req.body;

  // If successful returns added course, else 404
  ADD_COURSE(courseInfo)
    .then(course => res.send(course))
    // Make 404
    .catch(() => res.status(404).send('already in db!'));
});

// AJAX to /action.
app.post('/action', (req, res, next) => {
  res.send('POST action completed!');
});

// Export the module like this for Brunch.
module.exports = (config, callback) => {
  // Server config is passed within the `config` variable.
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}!`);
    callback();
  });

  // Return the app; it has the `close()` method, which would be ran when
  // Brunch server is terminated
  return app;
};
