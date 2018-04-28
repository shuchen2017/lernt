// Modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
// Components
const {
  GET_COURSES,
  ADD_COURSE,
  ADD_USER,
  ADD_VOTE,
  DELETE_VOTE,
  FETCH_USER_WITH_VOTES,
} = require('./database/Queries');
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

/*
ROUTE LEGEND:
  STATIC:
    - GET '/': Serves up static files and index.html.
  SIGNUP / LOGIN / LOGOUT:
    - Signup:
      - Route: POST /api/signup
      - Takes: { username, email, password }
      - Returns: user Obj if successful, else 404
    - Login:
      - Route: POST api/login
      - Takes: { username, password }
      - Returns: If successful user obj and 201, else ?
    - Logout:
      - Route: POST api/logout
      - Takes: ?
      - Returns: Invalidates user cookie, redirects to /
  COURSE:
    - Get all courses:
      - Route: GET /api/courses
      - Returns all courses in object { id: { courseInfo } }
    - Add new course:
      - Route: POST api/courses
      - Takes: { title, url, category, submittedBy: userId, optional[ instructor, description, price: float, imageUrl]}
      - Returns: If successful, course object, else 404
  VOTES:
    - Add Vote (also used to change from upvote to downvote)
      - Route: POST /api/vote
      - Takes: { userId, courseId, voteType }
      - Returns: If successful vote object, else 404
        - Warning: Returns vote object even if nothing updated! Should prevent duplicate votes on clientside
    - Delete Vote
      - Route: DELETE api/vote
      - Takes: { userId, courseId, voteType: 'upVote' || 'downVote' }
      - Returns: 201 if deleted, 401 if error
  USER:
    - Route: GET /api/user/:id
    - Return { id, username, email, upVotes: [courseIds], downVotes: [courseIds] }
      - If fail, return 404
*/

// SIGNUP
app.post('/api/signup', (req, res) => {
  const userInfo = req.body;

  ADD_USER(userInfo)
    .then((createdUser) => {
      if (createdUser) {
        req.login(createdUser, (err) => {
          if (err) {
            res.status(500).send('Some unknown error logging in');
          } else {
            // DONT SEND PASSWORD
            res.send(createdUser);
          }
        });
      } else {
        res.status(401).send('Username or password in use!');
      }
    })
    .catch(err => res.status(403).send('something failed on signup'));
});

// LOGIN
app.post('/api/login', passport.authenticate('local-login'), (req, res) => {
  console.log(req.user.username, ' was successfully logged in');
  res.status(201).json(req.user);
});

// LOGOUT
app.post('/api/logout', isLoggedIn, (req, res) => {
  req.logout();
  console.log('Successfully logged out');

  res
    .clearCookie('connect.sid')
    .status(201)
    .redirect('/');
});

// GET ALL COURSES
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
app.post('/api/courses', (req, res) => {
  const courseInfo = req.body;
  // If successful returns added course, else 404
  ADD_COURSE(courseInfo)
    .then(course => res.send(course))
    // Make 404
    .catch(() => res.status(402).send('already in db!'));
});

// GET ALL CATEGORIES
// Returns an array of all categories found.
app.get('/api/categories', async (req, res) => {
  try {
    GET_COURSES().then((courses) => {
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

// ADD OR MODIFY VOTE
app.post('/api/vote', isLoggedIn, (req, res) => {
  const voteInfo = req.body;

  ADD_VOTE(voteInfo).then((vote) => {
    if (vote) {
      res.status(201).send(vote);
    } else {
      res.status(401).send('Vote failed');
    }
  });
});

// DELETE VOTE
app.delete('/api/vote', isLoggedIn, (req, res) => {
  const voteInfo = req.body;

  DELETE_VOTE(voteInfo).then((deletedRows) => {
    if (deletedRows) {
      res.status(201).send(`${deletedRows} rows deleted!`);
    } else {
      res.status(401).send("Couldn't delete!");
    }
  });
});

// GET USER
app.get('/api/user/:id', (req, res) => {
  const { id } = req.params;

  FETCH_USER_WITH_VOTES(id)
    .then((userUnformatted) => {
      const user = {
        ...userUnformatted,
        upVotes: [],
        downVotes: [],
      };

      delete user.userVotes;

      userUnformatted.userVotes.forEach((vote) => {
        if (vote.vote_type === 'upVote') {
          user.upVotes.push(vote.course_id);
        } else {
          user.downVotes.push(vote.course_id);
        }
      });

      res.status(201).send(user);
    })
    .catch(err => res.status(401).send('Could not find user'));
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

/** ********* Previous group's routes - examine later:
  ------- FROM PREVIOUS GROUP (look at later) ----------
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
