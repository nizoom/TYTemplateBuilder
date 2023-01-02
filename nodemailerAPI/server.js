const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const handlebars = require("handlebars");
const login = require("./resplogin.js");

const port = 3002;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

dotenv.config({ path: "../.env" });

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

// login();

app.post("/send", function (req, res) {
  // let results = [] // success  /failure of whether emails are sent are stored here

  console.log(req.body);

  const arrOfEmailObjs = req.body;

  const numberOfEmails = arrOfEmailObjs.length;

  getResults(arrOfEmailObjs);
  // . then((data) => res.json({ results: [data]}));

  function getResults(arrOfEmailObjs) {
    arrOfEmailObjs.map((emailObj) => {
      const readHTMLFile = function (path, callback) {
        fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
          if (err) {
            console.log(err);
            callback(err, null);
            throw err;
          } else {
            callback(null, html);
          }
        });
      };

      const __dirname = path.resolve();

      readHTMLFile(
        __dirname + `/templates/${emailObj.templateType}.handlebars`,
        async function (err, html) {
          const template = handlebars.compile(html);

          //the properties of the obj are used to plug into the template
          const replacements = emailObj;

          const htmlToSend = template(replacements);

          let mailOptions = {
            from: "cohen@commonthreadsproject.org", //ThankYouFromCTP@outlook.com' ALL TESTING USE THIS EMAIL
            to: "nissimram1812@gmail.com", //donation.TYToEmailAddress, //['info@commonthreadsproject.org',
            bcc: "",
            subject: "Test",
            text: "",
            html: htmlToSend,
          };

          const result = await transporter.sendMail(mailOptions);

          const bool = result.accepted.length > 0 ? true : false;

          console.log(bool);

          resCallBack(bool);
          return bool;
        }
      );
    });
  }

  let results = [];

  function resCallBack(successbool) {
    results.push(successbool);
    if (results.length === numberOfEmails) {
      res.json({ results: results });
    }
  }
});

app.post("/login", async function (req, res) {
  result = await login(req.body);
  res.json(result);
});
