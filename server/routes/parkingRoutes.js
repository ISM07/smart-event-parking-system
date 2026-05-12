const express = require('express')
const router = express.Router()
const Parking = require('../models/Parking')

// GET ALL
router.get('/', async (req, res) => {
  try {
    const data = await Parking.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// ADD (FIX 500 ERROR HERE)
router.post('/', async (req, res) => {
  try {

    console.log('BODY:', req.body)

    const data = new Parking({
      personName: req.body.personName,
      carNumber: req.body.carNumber,
      carColor: req.body.carColor
    })

    await data.save()

    res.json({ success: true })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
})

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Parking.findByIdAndDelete(req.params.id)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    await Parking.findByIdAndUpdate(req.params.id, req.body)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router