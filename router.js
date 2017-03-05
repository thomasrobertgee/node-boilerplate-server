const Authentication = require('./controllers/authentication')

module.exports = function(app) {
  // req = request which is an object that represents the incoming http request (holds the request data)
  // res = response object allows us to respond to our user in some way
  // next is mostly for error handling


  // if the user posts anything to /signup then run this function
  app.post('/signup', Authentication.signup)

}
