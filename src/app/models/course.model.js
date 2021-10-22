const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;
const Course = new Schema({
  name: {type : String},
  description: {type: String, maxLength: 600},
  image: {type: String, maxLength: 255},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  slug: {type: String},
  videoId: {type: String}
})

module.exports = mongoose.model('Course', Course)