/******************************************************************************
 *  Execution       : default node          : cmd> nodemon route.js
 *
 *  @description
 *
 *  @file           : route.js
 *  @overview       : routes
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-april-2021
 *
 ******************************************************************************/
/*
required files
*/
const express = require('express');
const router = express.Router();
const mailControler = require('../controller/mailControl');

router.post('/send', mailControler);

module.exports = router;