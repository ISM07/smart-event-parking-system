const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/parking', require('./routes/parkingRoutes'))

app.listen(5000, () => {
  console.log('Server running on 5000')
})