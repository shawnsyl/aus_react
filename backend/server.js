const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
mongoose = require("mongoose");
const PORT = 4000;
const MONGO_URL = "mongodb://127.0.0.1:27017/aus_test";
const calendarRoutes = express.Router();

let Events = require("./events-model");
let Circles = require("./circles-model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

calendarRoutes.route("/").get(function(req, res) {
  console.log("first get nigga"); /*;
  res.send();*/

  Events.find(function(err, eventlist) {
    if (err) {
      console.log(err);
    } else {
      res.json(eventlist);
    }
  });
});

calendarRoutes.route("/:monthNo-:dayNo").get(function(req, res) {
  let monthNo = req.params.monthNo.split(":")[1];
  let dayNo = req.params.dayNo.split(":")[1];
  Events.find({ $and: [{ day: dayNo, month: monthNo }] }, function(err, event) {
    console.log(event);
    res.json(event);
  });
});

app.use("/calendar", calendarRoutes);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
