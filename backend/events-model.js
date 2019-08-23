const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Events = new Schema({
  month: { type: String },
  day: { type: String },
  name: { type: String },
  desc: { type: String },
  year: { type: String }
});
module.exports = mongoose.model("events", Events);
