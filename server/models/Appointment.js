const mongoose = require("mongoose");

const appointSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  userid: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: { 
    type: Date,
    default: Date.now
   },
});

const Appointment = new mongoose.model("appointment", appointSchema);
module.exports = Appointment;
