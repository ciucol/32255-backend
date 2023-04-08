const router = app => {
  app.use('users', usersController)
  app.use('restaurants', restaurantController)
  app.use('orders', ordersController)
}
module.exports = router
