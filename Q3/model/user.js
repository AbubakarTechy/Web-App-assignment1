const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  dob: { type: String },
  address: { type: String }
});

module.exports = mongoose.model('User', UserSchema);
