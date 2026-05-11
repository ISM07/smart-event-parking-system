const router = require('express').Router()
const Parking = require('../models/Parking')

// Create
router.post('/', async (req, res) => {
  const data = await Parking.create(req.body)
  res.json(data)
})

// Read
router.get('/', async (req, res) => {
  const data = await Parking.find()
  res.json(data)
})

// Delete
router.delete('/:id', async (req, res) => {
  await Parking.findByIdAndDelete(req.params.id)
  res.json({ message: 'Deleted' })
})

module.exports = router