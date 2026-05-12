const express = require('express')
const router = express.Router()
const Parking = require('../models/Parking')

// GET ALL
router.get('/', async (req, res) => {
  const data = await Parking.find()
  res.json(data)
})

// ADD
router.post('/', async (req, res) => {
  const data = new Parking(req.body)
  await data.save()
  res.json({ success: true })
})

// DELETE
router.delete('/:id', async (req, res) => {
  await Parking.findByIdAndDelete(req.params.id)
  res.json({ success: true })
})

// UPDATE
router.put('/:id', async (req, res) => {
  await Parking.findByIdAndUpdate(req.params.id, req.body)
  res.json({ success: true })
})

module.exports = router