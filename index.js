//Main starting point of the application

const express = require('express')
const http = require('http')
const router = require('./router')
const mongoose = require('mongoose')

//DB Setup
mongoose.connect('mongodb://localhost/auth/auth')

//used to parse incoming requests into json
const bodyParser = require('body-parser')

//morgan is a login framework
const morgan = require('morgan')
const app = express();

//app setup
//middlewares
//any incoming requests from the server is going to pass to morgan and also to bodyParser by default
//'app.use' does this by registering them as middlewares
app.use(morgan('combined')); 
app.use(bodyParser.json({ type: '*/*' }))

router(app)


//server setup
const port = process.env.PORT || 3090;

//'create a http server that knows how to receive request and anything that comes in go ahead and foward to our express application
const server = http.createServer(app)
server.listen(port);
console.log('Server listening on:', port)