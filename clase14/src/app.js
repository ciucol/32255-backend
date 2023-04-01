const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const MongoConnect = require('../db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))
app.use(cors(['localhost:5500'], ['POST', 'PUT']))

router(app)

const mongoConnectCopia0 = MongoConnect.getInstance()

const mongoConnectCopia1 = MongoConnect.getInstance()
const mongoConnectCopia2 = MongoConnect.getInstance()
const mongoConnectCopia3 = MongoConnect.getInstance()

module.exports = app
