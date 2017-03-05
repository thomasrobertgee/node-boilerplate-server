// this is where we are going to put logic to authenticate a request
const jwt = require('jwt-simple')
const User = require('../models/user')
const config = require('../config')

function tokenForUser(user) {
  const timestamp = new Date().getTime()
  // sub = subject
  // iat = issued at time
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret) // first argument is the information we want to encode, the second argument is the secret we are going to use to encode it
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them token
  res.send({ token: tokenForUser(req.user) })
}

exports.signup = function(req, res, next) {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    return res.status(422).send({ error: 'Both email and password required'})
  }

  // see if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err)}

    // if a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email already exists' })
    }

    // if a user with a fresh email, create and save user record
    const user = new User({
      email: email,
      password: password
    })

    // save user
    user.save(function(err) {
      // if there is an error when saving user
      if (err) { return next(err) }

      // respond to request indicating the user was created
      res.json({ token: tokenForUser(user) })
      // note that an id for the user is automaticaly created when the user is saved
    })
  })
}

// if all is successful, Postman should spit back whatever is referenced in res.json({ foo })

// if you send the request a second time, Postman should spit back this:
// {
//   "error": "Email already exists"
// }
// only if the email was the same in both requests
