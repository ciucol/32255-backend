const controllerUsers = require('../users/controller.users')

const router = (app) => {
  app.use('/users', controllerUsers)
}

module.exports = router