const usersController = require('../users/controller.users')
const petsController = require('../pets/controller.pets')

const router = (app) => {
  app.use('/api/users', usersController)
  app.use('/api/pets', petsController)
}

module.exports = router