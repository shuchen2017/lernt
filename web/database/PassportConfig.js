const LocalStrategy = require('passport-local').Strategy;
// const passport = require('passport');
// const { sequelize: db} = require('./i');
const { ADD_USER, FETCH_USER } = require('./Queries');

const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = function (passport) {
  // Add user session info to cookie
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Validate user cookie
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  // Local stratigy to login existing user and decrypt password
  passport.use(
    'local-login',
    new LocalStrategy(async (username, password, cb) => {
      const userData = await FETCH_USER(username);
      if (userData) {
        // unhashes stored password and compares to user input
        bcrypt.compare(password, userData.password, (err, res) => {
          if (err) {
            cb(err, null);
          } else if (res === false) {
            cb(null, false);
          } else {
            console.log('authenticated');
            cb(null, userData);
          }
        });
      } else {
        cb(null, false);
      }
    }),
  );
};

// // Signup currently handled by server!
// // Signup new users
// passport.use(
//   'local-signup',
//   new LocalStrategy(async (username, password, cb) => {
//     bcrypt.hash(password, saltRounds, async (err, hash) => {
//       if (err) {
//         console.log('Cannot hash password');
//         cb(err, null);
//       } else {
//         const user = await ADD_USER({ email: username, password: hash });
//         if ((user === username, ' allready exists')) {
//           cb(null, false);
//         } else {
//           cb(null, true);
//         }
//       }
//     });
//   }),
// );
// further strategy could be added for O-auth... signing in with google facebook ect.
