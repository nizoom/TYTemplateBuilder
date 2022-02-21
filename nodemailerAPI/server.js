const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const dotenv = require("dotenv")
const path = require('path')
const cors = require("cors");
const fs = require('fs')
const handlebars = require("handlebars");

const port = 3002;

app.use(express.json());
app.use(cors());

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

    //{req.body.mailerState.email}

  console.log(req.body);

  const arrOfEmailObjs = req.body;

  arrOfEmailObjs.forEach(emailObj => {

      const readHTMLFile = function(path, callback){
      fs.readFile(path, {encoding: 'utf-8'}, function(err, html) {
        if(err){
          console.log(err)
          callback(err, null)
          throw err;
        }
        else {
          callback(null, html);
        }
      })
    }


    const __dirname = path.resolve();

    readHTMLFile(__dirname + `/templates/${emailObj.templateType}.handlebars`, function(err, html){

      const template = handlebars.compile(html);

      //the properties of the obj are used to plug into the template 
      const replacements = emailObj;

      const htmlToSend = template(replacements);


    let mailOptions = {

        from: 'cohen@commonthreadsproject.org', //ThankYouFromCTP@outlook.com' ALL TESTING USE THIS EMAIL 
        to: 'nissimram1812@gmail.com', //donation.TYToEmailAddress, //['info@commonthreadsproject.org', 
        bcc : '',
        subject: 'Test',
        text: '',           
        html: htmlToSend,
    
      };
    
      
    
      transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Failed to send");
          res.json({
            status: `donation email ${arrOfEmailObjs.indexOf(emailObj)} failed to send`,
          });

    
        } else {
          console.log("Email sent successfully");
          res.json({
            status : `donation email ${arrOfEmailObjs.indexOf(emailObj)} sent successfully`
          })
          
        }
      });
    })

  })
})
