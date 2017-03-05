const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

// requireAuth is the middleware
const requireAuth = passport.authenticate('jwt', { session: false }) // we don't want cookies to be created by default because we are using jwt tokens so flase disbales the creation of cookies
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app) {
  // req = request which is an object that represents the incoming http request (holds the request data)
  // res = response object allows us to respond to our user in some way
  // next is mostly for error handling

  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' })
  })

  // if the user posts anything to /signin then run this function
  app.post('/signin', requireSignin, Authentication.signin)


  // if the user posts anything to /signup then run this function
  app.post('/signup', Authentication.signup)

}
