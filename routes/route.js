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

router.post('create/second', mailControler.sendMailForEverySecond);
router.post('create/minute', mailControler.sendMailForEveryMinute);
router.post('create/hour', mailControler.sendMailForEveryHour);
router.post('create/dayofmonth', mailControler.sendMailForEveryDayOfMonth);
router.post('create/month', mailControler.sendMailForEveryMonth);
router.post('create/dayofweek', mailControler.sendMailForEveryDayOfWeek);
router.post('/stop', mailControler.sendMailStop);


module.exports = router;