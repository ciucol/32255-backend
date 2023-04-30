const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hi Docker' })
})

app.get('/easy', (req, res) => {
  let suma = 0
  for (let i = 0; i < 1000000; i++) {
    suma += i
  }

  res.json({ suma })
})

app.get('/veryhard', (req, res) => {
  let suma = 0

  for (let i = 0; i < 5e5; i++) {
    suma += i
  }

  res.json({ suma })
})

app.listen(9000, () => {
  console.log(9000)
})
