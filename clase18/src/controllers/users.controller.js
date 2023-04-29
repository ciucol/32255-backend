const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  if (Object.entries(req.query).length === 0) {
    req.logger.warning('No vienen queries')
  }
  res.json({ message: 'hi' })
})

router.get('/easy', (req, res) => {
  let suma = 0
  for (let i = 0; i < 1000000; i++) {
    suma += i
  }

  res.json({ suma })
})

router.get('/veryhard', (req, res) => {
  let suma = 0

  for (let i = 0; i < 5e7; i++) {
    suma += i
  }

  res.json({ suma })
})

module.exports = router
