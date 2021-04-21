/******************************************************************************
 *  Execution       : default node          : cmd> nodemon index.js
 *
 *  @description
 *
 *  @file           : index.js
 *  @overview       : Build a simple API to schedule emails and send them
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-april-2021
 *
 ******************************************************************************/
/*
required files
*/
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const router = require('./routes/route');
require('dotenv').config();

/*
Parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(express.json());

// validate the req
// app.use(expressValidator());

// middlewares
app.use('/', router);

/*
server is listen 4000 port 
*/
server.listen(4000, () => {
    console.log("Server is listening to port 4000");
})

