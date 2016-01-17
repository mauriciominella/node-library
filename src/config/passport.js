var passport = require('passport');

module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    console.log('passport initialized');

  passport.serializeUser(function(user, done){
      console.log('user serialized ' + user);
      done(null, user);
  });

  passport.deserializeUser(function(user, done){
      console.log('user deserialized ' + user);
      done(null, user);
  });

  require('./strategies/local.strategy')();
};
