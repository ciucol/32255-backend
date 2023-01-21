const usersController = require('../users/controller.users')

const router = (app) => {
  app.use('/api/users', usersController)
}

module.exports = router