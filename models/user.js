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
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  moments: [{
    name: String,
    lat: Number,
    lng: Number,
    timestamp: Number
  }],
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