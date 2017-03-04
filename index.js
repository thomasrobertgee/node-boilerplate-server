// Main starting point of the application
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./router')

// App Setup
// morgan and bodyParser are middlewares, any incoming requests will be passed through these two middlewares by default
app.use(morgan('combined')) // morgan is a logging framework that logs incoming requests (great for debugging)
app.use(bodyParser.json({ type: '*/*' })) // used to parse incoming requests, in this case into JSON
router(app)

// Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app) // create an http server that knows how to receive requests, and anything that comes in, go ahead and forward it onto our express application
server.listen(port) // listen to the port we created above
console.log('Server listening on: ', port)
