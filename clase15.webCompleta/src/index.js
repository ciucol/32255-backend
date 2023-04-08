const express = require('express')
const mongoConnect = require('../db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoConnect()

app.listen(3000, () => {
  console.log(`Server running at port 3000`)
})
