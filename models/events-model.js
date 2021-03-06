const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Events = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  month: { type: String, required: true },
  day: { type: String, required: true },
  name: { type: String, required: true },
  desc: { type: String, required: true },
  year: { type: String, required: true }
});
module.exports = mongoose.model("events", Events);
