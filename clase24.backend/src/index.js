const express = require('express')
const cors = require('cors')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(cors())

router(app)

app.listen(8080, () => {
  console.log('Server running at port 8080')
})
