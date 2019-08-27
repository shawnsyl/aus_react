const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
let Events = require("../../models/events-model");
//this is only for testing
router.route("/").get(function(req, res) {
  Events.find(function(err, eventlist) {
    if (err) {
      console.log(err);
    } else {
      res.json(eventlist);
    }
  });
});

router.route("/:monthNo-:dayNo").get(function(req, res) {
  let monthNo = req.params.monthNo.split(":")[1];
  let dayNo = req.params.dayNo.split(":")[1];
  Events.find({ $and: [{ day: dayNo, month: monthNo }] }, function(err, event) {
    console.log(event);
    res.json(event);
  });
});

module.exports = router;
