const router = require('express').Router()

const Event = require('../models/Event')

router.get('/', async (req, res) => {

  const events = await Event.find()

  res.json(events)

})

router.post('/', async (req, res) => {

  const event = await Event.create(req.body)

  res.json(event)

})

router.put('/:id', async (req, res) => {

  const updated = await Event.findByIdAndUpdate(

    req.params.id,

    req.body,

    { new: true }

  )

  res.json(updated)

})

router.delete('/:id', async (req, res) => {

  await Event.findByIdAndDelete(req.params.id)

  res.json({
    message: 'Deleted Successfully'
  })

})

module.exports = router