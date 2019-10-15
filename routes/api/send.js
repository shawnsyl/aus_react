const nodemailer = require("nodemailer");
const express = require("express");
//const path = require("path");
const router = express.Router();
//const multer = require("multer");
const formidable = require("formidable");
const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: "ausmailtester@gmail.com",
    pass: "@ust3st3r"
  },
  secureConnection: true
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/contact", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.body.message;
  let content = `Name: ${name} \nEmail: ${email} \nMessage:\n${message} `;

  var mail = {
    from: name,
    to: "aus.vpengagement@gmail.com", //Change to email address that you want to receive messages on
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

router.post("/complaint", (req, res, next) => {
  let content = "";
  let subject = "";
  let name = "";
  let filelist = [];
  form = new formidable.IncomingForm();
  form
    .parse(req, function(err, fields, files) {
      name = name === "" ? fields.name : name;
      subject =
        subject === ""
          ? fields.candidate + " - Allegation of Elections Violation"
          : subject;
    })
    .on("file", function(name, file) {
      console.log("Got file:", name, file.name, file.path);
      filelist.push({ filename: file.name, path: file.path });
    })
    .on("field", function(name, field) {
      content = content + name + ": " + field + "\n";
    })
    .on("error", function(err) {
      next(err);
    })
    .on("end", function() {
      let mail = {
        from: name,
        to: "eesy96@gmail.com",
        subject: subject,
        text: content,
        attachments: filelist
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
});

module.exports = router;
// STORAGE STUFF
// const storageDir = path.join(__dirname, "..", "storage");

// const storageConfig = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, storageDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// var storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, "_uploads");
//   },
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

// var upload = multer({ storage: storage }).single("file");
