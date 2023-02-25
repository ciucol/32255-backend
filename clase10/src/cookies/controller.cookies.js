const { Router } = require('express')

const router = Router()

router.get('/view', (req, res) => {
  res.render('index.handlebars')
})

router.get('/', (req, res) => {
  const cookies = req.cookies

  res.json(cookies)
})

router.post('/', (req, res) => {
  const user = req.body

  res.cookie('NuestraCookie', JSON.stringify(user)).json({ message: 'Cookie creada' })
})

module.exports = router