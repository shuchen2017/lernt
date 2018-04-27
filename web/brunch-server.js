// Modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
// Components
const { GET_COURSES, ADD_COURSE, ADD_USER } = require('./database/Queries');
const { sequelize: db } = require('./database/index');
// Call component to load test data
const LOAD_SAMPLE_DATA = require('./database/Tests');

const app = express();
require('./database/PassportConfig')(passport);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

/*-------------------------------------------------------------------
          Authorization! :)
-------------------------------------------------------------------*/
// specifies cookie length and secret for creating cookies.
// the secret should be in a git ignore file
app.use(session({
  secret: 'shouldbestoredinakey',
  resave: true,
  // saveUninitialized: true,
  cookie: { maxAge: 12 * 60 * 60 * 1000 },
}));

// 🐰🎩 Passport Magic 🎩🐰
app.use(passport.initialize());
app.use(passport.session());

// Middleware to check if user is logged in.
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).end('You must log in to do that!');
};

// Signup new user
// Takes { username, email, password }
// If signup successful sends back user, else sends 404 with text
app.post('/api/signup', (req, res) => {
  const userInfo = req.body;

  ADD_USER(userInfo)
    .then((createdUser) => {
      if (createdUser) {
        req.login(createdUser, (err) => {
          if (err) {
            res.status(404).send('Some unknown error logging in');
          } else {
            res.send(createdUser);
          }
        });
      } else {
        res.status(404).send('Username or password in use!');
      }
    })
    .catch(err => console.log('some error', err));
});

// Log In User
app.post('/api/login', passport.authenticate('local-login'), (req, res) => {
  console.log(req.user.username, ' was successfully logged in');
  res.status(201).json(req.user);
});

// ends session disables cookie logs you out.
// TODO: clear cookies?
app.post('/api/logout', isLoggedIn, (req, res) => {
  req.logout();
  console.log('Successfully logged out');

  res
    .clearCookie('connect.sid')
    .status(201)
    .redirect('/');
});

/*-------------------------------------------------------------------
          No Longer Authorization! :)
-------------------------------------------------------------------*/

/*
ROUTE LEGEND:
  STATIC:
    - GET '/': Serves up static files and index.html.
  COURSE:
    - GET '/api/courses': Returns object all courses { id: { courseInfo } }

  ------- Check out later ----------
  CATEGORY:
    - GET '/api/categories': List of all categories.
    - GET '/api/categories/:id': Detail view of category.
    - POST '/api/categories': Add a new cateogry.
  COURSE:
    - GET '/api/categories/:id/courses': List of all courses for an individual category.
    - GET '/api/categories/:id/courses/:courseId': Detailed information about a specific course.
    - POST '/api/categories/:id/courses': Add a new course to a category.
  USER:
    - GET '/api/users': Returns a list of each user document.
    - GET '/api/users/:id': Returns a specific user's information.
    - POST '/api/users': Adds a new user to the database.
  UPVOTE:
    - POST '/api/upvote': Adds an upvote.
    - DELETE '/api/upvote': Removes an upvote.
    - PATCH '/api/upvotes': Retrieves upvotes. Send in the fields you want to filter by.
    - PATCH '/api/upvote': Processes the upvote request.
*/

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
