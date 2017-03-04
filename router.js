module.exports = function(app) {
  // req = request which is an object that represents the incoming http request (holds the request data)
  // res = response object allows us to respond to our user in some way
  // next is mostly for error handling


  // if the user visits home then run this function
  app.get('/', function(req, res, next) {
    res.send(['water', 'phone', 'paper'])
  })

}
