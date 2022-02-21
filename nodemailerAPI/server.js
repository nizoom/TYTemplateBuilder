const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const dotenv = require("dotenv")
require('path')
const cors = require("cors");

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


    // const readHTMLFile = function(path, callback){
    //   fs.readFile(path, {encoding: 'utf-8'}, function(err, html) {
    //     if(err){
    //       console.log(err)
    //       callback(err, null)
    //       throw err;
    //     }
    //     else {
    //       callback(null, html);
    //     }
    //   })
    // }


    // const __dirname = path.resolve();

    // readHTMLFile(__dirname + `/emails/templates/${donation.templateName}.handlebars`, function(err, html){

    //   const template = handlebars.compile(html);

    //   //the properties of the obj are used to plug into the template 
    //   const replacements = donation;

    //   const htmlToSend = template(replacements);







    // let mailOptions = {

    //     from: 'cohen@commonthreadsproject.org', //ThankYouFromCTP@outlook.com' ALL TESTING USE THIS EMAIL 
    //     to: 'nissimram1812@gmail.com', //donation.TYToEmailAddress, //['info@commonthreadsproject.org', 
    //     bcc : '',
    //     subject: 'Test',
    //     text: '',           
    //     html: 'Hi from nodemailer API'//htmlToSend,
    
    //   };
    
      
    
    //   transporter.sendMail(mailOptions, function(err, data) {
    //     if (err) {
    //       console.log("Error " + err);
    
    //       return `${donation} failed to send`
    
    //     } else {
    //       console.log("Email sent successfully");
    
    //       return `${donation} was successfully sent`
    //     }
    //   });
    // })

})
