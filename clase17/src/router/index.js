const stringController = require('../controller/string.controller')
const usersController = require('../controller/users.controller')

const router = app => {
  app.use('/string', stringController)
  app.use('/users', usersController)
}

module.exports = router
