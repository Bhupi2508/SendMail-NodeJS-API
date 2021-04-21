/******************************************************************************
 *  Execution       : default node          : cmd> nodemon sendmail.js 
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


exports.sendmailServices = (req, routeData) => {

    // e-mail message options
    let mailOptions = {
        from: process.env.user,
        to: req.body.to,
        subject: 'Invitation: Full Stack Developer Interview',
        html: `<html><body><h3> Please available on time for the <h2> interview </h2> </h3></body></html>`
    };

    // e-mail transport configuration
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    });

    switch (routeData) {
        case 'second':
            // This function will send the mail in each and every minute
            cron.schedule('* * * * * *', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        case 'minute':
            // This function will send the mail in each and every minute
            cron.schedule('* * * * *', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        case 'hour':
            // This function will send the mail in each and every minute
            cron.schedule('* * * *', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        case 'day of month':
            // This function will send the mail in each and every minute
            cron.schedule('* * *', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        case 'month':
            // This function will send the mail in each and every minute
            cron.schedule('* *', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        case 'day fo week':
            // This function will send the mail in each and every minute
            cron.schedule('*', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        default:
            // This function will send the mail in each and every minute
            // Send e-mail
            mailTransaport()
    }

    function mailTransaport() {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return error;
            } else {
                return info;
            }
        });
    }

}