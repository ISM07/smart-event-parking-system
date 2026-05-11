router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})