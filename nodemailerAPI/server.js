const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const dotenv = require("dotenv")
require('path')

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});

dotenv.config({path: '../.env'})



let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME, 
      pass: process.env.MAIL_PASSWORD, 
      clientId: process.env.OAUTH_CLIENTID, 
      clientSecret: process.env.OAUTH_CLIENT_SECRET, 
      refreshToken: process.env.OAUTH_REFRESH_TOKEN  
    }
  });

  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });

app.post('/send', function (req, res){
    
    let mailOptions = {

        from: 'cohen@commonthreadsproject.org', //ThankYouFromCTP@outlook.com' ALL TESTING USE THIS EMAIL 
        to: 'nissimram1812@gmail.com', //donation.TYToEmailAddress, //['info@commonthreadsproject.org', 
        bcc : '',
        subject: 'Test',
        text: '',
        html: 'Hi from nodemailer API'//htmlToSend,
    
      };
    
      
    
      transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
    
          return `${donation} failed to send`
    
        } else {
          console.log("Email sent successfully");
    
          return `${donation} was successfully sent`
        }
      });

})
