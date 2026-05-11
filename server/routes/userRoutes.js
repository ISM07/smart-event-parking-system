const router = require('express').Router()

const User = require('../models/User')

router.post('/register', async (req, res) => {

  const user = await User.create(req.body)

  res.json(user)

})

router.post('/login', async (req, res) => {

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })

  if(user){
    res.json({
      success: true,
      user
    })
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid Credentials'
    })
  }

})

module.exports = router