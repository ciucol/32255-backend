const foodController = require('../foods/controller.food')

const router = (app) => {
  app.use('/foods', foodController)
}

module.exports = router