const usersController = require('../controllers/users.controller.js')

const router = app => {
  app.use('/users', usersController)
}

module.exports = router
