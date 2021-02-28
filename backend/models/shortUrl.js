const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)