const Restaurants = require('./models/Restaurants.model')

class RestaurantsDAO {
  constructor() {}

  async getAll() {
    try {
      return await Restaurants.find()
    } catch (error) {
      throw error
    }
  }

  async getOne(id) {
    try {
      return await Restaurants.findById(id)
    } catch (error) {
      throw error
    }
  }

  async create(newRestaurantInfo) {
    try {
      return await Restaurants.create(newRestaurantInfo)
    } catch (error) {
      throw error
    }
  }

  async update(id, restaurantInfo) {
    try {
      return await Restaurants.updateOne({ _id: id }, { $set: restaurantInfo })
    } catch (error) {
      throw error
    }
  }
}

module.exports = RestaurantsDAO
