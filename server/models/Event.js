const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  availableSeats: Number,
  eventDate: Date,
  active: Boolean
})

module.exports = mongoose.model('Event', eventSchema)