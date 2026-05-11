router.post('/register', async (req, res) => {
  try {
    console.log(req.body) 

    const user = await User.create(req.body)

    res.json(user)

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
})