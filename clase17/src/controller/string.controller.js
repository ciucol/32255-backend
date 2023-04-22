const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  let string = 'Hola gente esto es un string muy largo'

  for (let i = 0; i < 10e5; i++) {
    string += ' Hola gente esto es un string muy largo'
  }

  res.send(string)
})

module.exports = router
