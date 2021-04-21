/******************************************************************************
 *  Execution       : default node          : cmd> nodemon sendmail.js
 * 
 *  @description    
 * 
 *  @file           : sendmail.js
 *  @overview       : Sendmail services
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-april-2021
 *
 ******************************************************************************/
/*
required files
*/
let nodemailer = require('nodemailer');
let cron = require('node-cron');


exports.sendmailServices = () => {

    // e-mail message options
    let mailOptions = {
        from: process.env.user,
        to: 'aa@gmail.com',
        subject: 'Invitation: Full Stack Developer Interview',
        text: `<html><body><h2> Please available on time </h2></body></html>`
    };

    // e-mail transport configuration
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.user,
            pass: process.env.user
        }
    });

    cron.schedule('* * * * *', () => {
        // Send e-mail
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return error;
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    });

}