var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  instagramAccessToken: {
    type: String
  },
  updatedAt: {
    type: Number
  },
  createdAt: {
    type: Number
  }
});

module.exports = mongoose.model('User', userSchema);