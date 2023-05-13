const userController = require('../controllers/users.controller')

const router = app => {
  app.use('/users', userController)
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' })
  })
}

module.exports = router
