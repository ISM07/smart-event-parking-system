const express = require('express')

const router = express.Router()

const Parking = require('../models/Parking')

// GET
router.get('/', async (req, res) => {

  const data = await Parking.find()

  res.json(data)
})

// POST
router.post('/', async (req, res) => {

  try {

    const newParking = new Parking(req.body)

    await newParking.save()

    res.json({
      success: true
    })

  } catch (error) {

    res.json({
      success: false
    })
  }
})

// DELETE
router.delete('/:id', async (req, res) => {

  try {

    await Parking.findByIdAndDelete(req.params.id)

    res.json({
      success: true
    })

  } catch (error) {

    res.json({
      success: false
    })
  }
})

// UPDATE
router.put('/:id', async (req, res) => {

  try {

    await Parking.findByIdAndUpdate(
      req.params.id,
      req.body
    )

    res.json({
      success: true
    })

  } catch (error) {

    res.json({
      success: false
    })
  }
})

module.exports = router