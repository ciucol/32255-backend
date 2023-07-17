const paymentsController = require('../controllers/payments.controller')

const router = app => {
  app.use('/api/payments', paymentsController)
}
module.exports = router
