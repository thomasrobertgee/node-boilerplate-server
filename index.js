// Main starting point of the application
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

// App Setup


// Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app) // create an http server that knows how to recieve requests, and anything that comes in, go ahead and forward it onto our express application
server.listen(port) // listen to the port we created above
console.log('Server listening on: ', port)
