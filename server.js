const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
mongoose = require("mongoose");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
const MONGO_URI = require("./config/keys").mongoURI;
const path = require("path");
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

if (process.env.NODE_ENV === "production") {
  console.log("PROD");
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//connect to db
//aus_dbadmin aus-password-123
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
app.use("/calendar", calendar);
/*
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
//route APIs

app.use("/users", users);
*/
//start server
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
