var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  fullName: {
    type: String,
  },
  profilePicture: {
    type: String
  },
  accessToken: {
    type: String
  },
  updatedAt: {
    type: String
  },
  createdAt: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);