const express = require('express')
const mongoConnect = require('../db')
const router = require('./router')
const { port } = require('./config/app.config')

const app = express()

app.use(express.json())

mongoConnect()

router(app)

app.listen(port, () => {
  console.log(port)
})
