const usersController = require('../controllers/users.controller')
const toysController = require('../controllers/toys.controller')

const router = app => {
  app.use('/users', usersController)
  app.use('/toys', toysController)
}

module.exports = router
