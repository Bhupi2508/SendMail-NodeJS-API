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
require('dotenv').config();
const cron = require('node-cron');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendmailServices = (req, routeData) => {

    /** 
   * sendEmail 
   * @param{Object}mailObj - Email information 
   * @param{String}from- Email address of the sender 
   * @param{Array}to- Array of recipients email address 
   * @param{String}subject - Subject of the email 
   * @param{String}text - Email body 
   */
    const mailOptions = {
        from: req.body.from ? req.body.from : process.env.user,
        to: req.body.to,
        subject: req.body.subject ? req.body.subject : 'Invitation: Full Stack Developer Interview',
        text: req.body.text ? req.body.text : 'Nodejs sendmail API with scheduling',
        html: req.body.html ? req.body.html : `<h1>Interview - Mean Stack Developer ${new Date().toUTCString()}</h1> 
                                                
                                                <h2> Please be ready on time for the interview. </h2>
                                                `
    };

    switch (routeData) {
        case 'second':
            // This function will send the mail in each and every second
            cron.schedule('* * * * * *', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        case 'second':
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
            // This function will send the mail in each and every hour
            cron.schedule('* * * *', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        case 'day of month':
            // This function will send the mail in each and every day of month
            cron.schedule('* * *', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        case 'month':
            // This function will send the mail in each and every month
            cron.schedule('* *', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        case 'day fo week':
            // This function will send the mail in each and every day fo week
            cron.schedule('*', () => {
                // Send e-mail
                mailTransaport()
            },
                {
                    scheduled: true
                });
            break;
        default:
            task.stop()
    }

    function mailTransaport() {
        sgMail
            .send(mailOptions)
            .then(() => { }, error => {
                //   console.error(error);

                if (error.response) {
                    // console.error(error.response.body)
                }
            });
    }

}