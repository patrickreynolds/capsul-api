var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var Moment = new Schema({
  name: {
    type:     String,
    required: true
  },
  latitude: {
    type:     String,
    required: true
  },
  longitude: {
    type:     String,
    required: true
  },
  timestamp: {
    type:     Number,
    required:  true
  },
  radius: {
    type:     Number,
    required: true
  },
  description: {
    type:     String
  },
  createdAt: {
    type:     String,
    required: true
  },
  updatedAt: {
    type:     String,
    required: true
  },
  user: {
    type:     Schema.ObjectId, 
    ref:      'User'
  }
});

module.exports = mongoose.model('Moment', Moment);