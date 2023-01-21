const express = require('express')
const router = require('./router')

const port = 3000

const app = express()

app.use(express.json())

router(app)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})