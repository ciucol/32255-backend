const Orders = require('./models/Orders.model')

class OrdersDAO {
  constructor() {}

  async getAll() {
    try {
      return await Orders.find()
    } catch (error) {
      throw error
    }
  }

  async getOne(id) {
    try {
      return await Orders.findById(id)
    } catch (error) {
      throw error
    }
  }

  async create(newOrderInfo) {
    try {
      return await Orders.create(newOrderInfo)
    } catch (error) {
      throw error
    }
  }

  async update(id, restaurantInfo) {
    try {
      return await Restaurants.updateOne({ _id: id }, restaurantInfo)
    } catch (error) {
      throw error
    }
  }
}

module.exports = OrdersDAO
