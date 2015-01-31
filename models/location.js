var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var locationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  updatedAt: {
    type: Number
  },
  createdAt: {
    type: Number
  }
}); 

module.exports = mongoose.model('Location', locationSchema);