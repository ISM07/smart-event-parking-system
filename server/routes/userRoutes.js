const express = require('express')
const router = express.Router()
const User = require('../models/User')

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.json({ success: true })
  } catch (err) {
    res.json({ success: false })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    })

    if (user) {
      res.json({ success: true, user })
    } else {
      res.json({ success: false })
    }

  } catch (err) {
    res.json({ success: false })
  }
})

module.exports = router