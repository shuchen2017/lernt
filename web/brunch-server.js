const express = require('express');
const bodyParser = require('body-parser');
const { GET_COURSES, ADD_COURSE } = require('./database/Queries');
const LOAD_SAMPLE_DATA = require('./database/Tests');

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
      const coursesById = {};
      courses.forEach((course) => {
        coursesById[course.id] = course;
      });
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

// GET ALL CATEGORIES
// Returns an array of all categories found.
app.get('/api/categories', async (req, res) => {
  try {
    GET_COURSES()
      .then((courses) => {
        courses = courses.map(course => course.dataValues);
        const categories = courses.reduce((found, { category }) => {
          if (found.indexOf(category) === -1) found.push(category);
          return found;
        }, []);
        res.send(categories);
      });
  } catch (err) {
    res.status(500).send();
  }
  
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
