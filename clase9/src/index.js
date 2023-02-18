const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')
const port = 3000

const app = express()

app.use(express.json())

router(app)

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/32255-mongo-avanzado?retryWrites=true&w=majority', error => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log('db is connected')
  }

})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})