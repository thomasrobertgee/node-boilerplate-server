// use this to authenticate a user when they visit somewhere on the app that requires authentication
const passport = require('passport')
const User = require('../models/user')
const config = require('../config')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

// Create local strategy
const localOptions = { usernameField: 'email' }
// LocalStrategy defaults to username and password, so we needed to set the usernameField to email
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise call done with false
  User.findOne({ email: email }, function(err, user) {
    if (err) { return done(err) }
    if (!user) { return done(null, false) }

    // compare passwords - is 'password' equal to user.password?
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err) }
      if (!isMatch) { return done(null, false) }

      return done(null, user)
    })
  })

})

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

// Create JWT Strategy
// payload is the decoded JWT tokenForUser// done is a callback function that we need to call depending on whether we able to successfully authenticate the user
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // see if the user ID in the payload exists in our database
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false) }

    // if it does, call 'done' with that user
    if (user) {
      done(null, user)
    // otherwise, call done without a user object
    } else {
      done(null, false)
    }
  })
})

// Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)
