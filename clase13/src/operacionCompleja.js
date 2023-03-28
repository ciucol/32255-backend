const express = require('express')
const { fork } = require('child_process')

const app = express()

app.get('/users', (req, res) => {
  res.json({ message: 'Hola!!!' })
})

app.get('/reports/users', (req, res) => {
  const child = fork('./src/fork.js')

  child.send('Hola, calcula')

  child.on('message', result => {
    res.json({ message: result })
  })
})

app.listen(3000, () => {
  console.log(3000)
})
