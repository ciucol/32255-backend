const express = require('express')
const morgan = require('morgan')
const router = require('./router')

const port = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

router(app)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})