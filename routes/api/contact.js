let nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

let transport = {
  host: "smtp.gmail.com",
  auth: {
    user: "ausmailtester@gmail.com",
    pass: "@ust3st3r"
  },
  secureConnection: true
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;
  console.log(name);
  var content = `Name: ${name} \nEmail: ${email} \nMessage:\n${message} `;

  var mail = {
    from: name,
    to: "eesy96@gmail.com", //Change to email address that you want to receive messages on
    subject: subject,
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
      console.log(err);
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

module.exports = router;
