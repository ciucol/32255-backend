const express = require('express')
const handlebars = require('express-handlebars')
const router = require('./router')

const port = 9000

const app = express()
app.use(express.json())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

router(app)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})