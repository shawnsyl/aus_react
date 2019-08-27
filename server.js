const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
mongoose = require("mongoose");
const passport = require("passport");
const PORT = 4000;
const MONGO_URI = require("./config/keys").mongoURI;

//APIs
const calendar = require("./routes/api/calendar");
const users = require("./routes/api/users");

//app setup
const app = express();
app.use(cors());
//app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//connect to db
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true
  })
  .catch(error => {
    console.log(error);
  });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
//route APIs
app.use("/calendar", calendar);
app.use("/users", users);

//start server
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
