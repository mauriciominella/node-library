var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
  console.log('local strategy initialized');
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
      },
      function(username, password, done){
          console.log('LOCAL DONE!!!');
          var user = {
              username: username,
              password: password
          };
          return done(null, user);
      }));
};
