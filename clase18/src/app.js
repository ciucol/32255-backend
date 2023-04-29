const express = require('express')
const cors = require('cors')
const router = require('./router')
const loggerMiddleware = require('./middlewares/logger.middleware')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cors())
app.use(loggerMiddleware)

router(app)

module.exports = app
