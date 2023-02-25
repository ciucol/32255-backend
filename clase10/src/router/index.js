const viewsTemplateController = require('../viewsTemplate/controller.viewsTemplate')
const authController = require('../auth/controller.auth')
const usersController = require('../users/controller.users')

const cookiesController = require('../cookies/controller.cookies')
const sessionController = require('../session/controller.session')

const router = app => {
  app.use('/', viewsTemplateController)
  app.use('/auth', authController)
  app.use('/users', usersController)

  app.use('/cookies', cookiesController)
  app.use('/session', sessionController)
}

module.exports = router