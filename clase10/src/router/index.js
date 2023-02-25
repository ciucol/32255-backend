const cookiesController = require('../cookies/controller.cookies')
const sessionController = require('../session/controller.session')

const router = app => {
  app.use('/cookies', cookiesController)
  app.use('/session', sessionController)
}

module.exports = router