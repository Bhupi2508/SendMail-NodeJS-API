/******************************************************************************
 *  Execution       : default node          : cmd> nodemon mailControl.js
 * 
 *  @description    
 * 
 *  @file           : mailControl.js
 *  @overview       : control the flow of mail
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-april-2021
 *
 ******************************************************************************/
/*
required files
*/
const { body, validationResult } = require('express-validator');
var mailService = require('../services/sendmail');


// This control is send mail in every second
exports.sendMailForEverySecond = (req, res) => {
    commonReq(req, res, 'second')
}


// This control is send mail in every minute
exports.sendMailForEveryMinute = (req, res) => {
    commonReq(req, res, 'minute')
}



// This control is send mail in every Hour
exports.sendMailForEveryHour = (req, res) => {
    commonReq(req, res, 'hour')
}



// This control is send mail in every day of month
exports.sendMailForEveryDayOfMonth = (req, res) => {
    commonReq(req, res, 'day of month')
}


// This control is send mail in every month
exports.sendMailForEveryMonth = (req, res) => {
    commonReq(req, res, 'month')
}


// This control is send mail in every day of week
exports.sendMailForEveryDayOfWeek = (req, res) => {
    commonReq(req, res, 'day fo week')
}

// This control will stop the mail
exports.sendMailStop = (req, res) => {
    commonReq(req, res, 'stop')
}



// After validate req will send to sendmail service based on rooute
function commonReq(req, res, routeData) {
    body('from', 'Email is not valid').isEmail();
    body('to', 'Email is not valid').isEmail();
    const errors = validationResult(req);
    /*
    if error then show error
    */
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        /*
         send the req to the services and then callback
        */
        mailService.sendmailServices(req, routeData)
        res.status(200).send([{
            "Message": "Mail sent successfully, Please check it"
        }]);
    }
}

