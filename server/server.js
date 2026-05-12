const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Middleware (مهم جدًا)
app.use(cors())
app.use(express.json())

// Routes
const parkingRoutes = require('./routes/parkingRoutes')
const userRoutes = require('./routes/userRoutes')

app.use('/api/parking', parkingRoutes)
app.use('/api/users', userRoutes)

// MongoDB Connection (تصحيح مهم)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('Mongo Error:', err))

app.listen(5000, () => {
  console.log('Server Running on 5000')
})