
const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: String,
  otpHash: String,
  context: String,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // OTP expires after 5 minutes automatically
  },
});

module.exports = mongoose.model("Otp", otpSchema);
