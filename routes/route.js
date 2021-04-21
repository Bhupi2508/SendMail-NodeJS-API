/******************************************************************************
 *  Execution       : default node          : cmd> nodemon route.js
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

router.post('/second', mailControler.sendMailForEverySecond);
router.post('/minute', mailControler.sendMailForEveryMinute);
router.post('/hour', mailControler.sendMailForEveryHour);
router.post('/dayofmonth', mailControler.sendMailForEveryDayOfMonth);
router.post('/month', mailControler.sendMailForEveryMonth);
router.post('/dayofweek', mailControler.sendMailForEveryDayOfWeek);


module.exports = router;