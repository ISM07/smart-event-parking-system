const mongoose = require('mongoose')

const parkingSchema = new mongoose.Schema({
  personName: {
    type: String,
    required: true
  },
  carNumber: {
    type: String,
    required: true
  },
  carColor: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Parking', parkingSchema)