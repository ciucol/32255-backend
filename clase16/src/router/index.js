const emailController = require('../controller/email.controller')
const smsController = require('../controller/sms.controller')

const router = app => {
  app.use('/email', emailController)
  app.use('/sms', smsController)
}

module.exports = router
