// this is where we are going to put logic to authenticate a request
const User = require('../models/user')

exports.signup = function(req, res, next) {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password

  // see if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {

  })

  // if a user with email does exist, return an error


  // if a user with a fresh email, create and save user record


  // respond to request indicating the user was created
}
