const mongoose = require('mongoose')

const parkingSchema = new mongoose.Schema({
  personName: String,
  carNumber: String,
  carColor: String
})

module.exports = mongoose.model('Parking', parkingSchema)