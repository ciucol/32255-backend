const usersController = require('../controllers/users.controller')
const restaurantsController = require('../controllers/restaurants.controller')
const ordersController = require('../controllers/orders.controller')

const router = app => {
  app.use('/users', usersController)
  app.use('/restaurants', restaurantsController)
  app.use('/orders', ordersController)
}
module.exports = router
