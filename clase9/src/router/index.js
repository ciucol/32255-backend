const usersController = require('../users/controller.users')
const productsController = require('../products/controller.products')
const ordersController = require('../orders/controller.orders')

const router = app => {
  app.use('/users', usersController)
  app.use('/products', productsController)
  app.use('/orders', ordersController)
}

module.exports = router