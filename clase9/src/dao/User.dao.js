const User = require("./models/User.model");

class UserDao {
  async find() {
    try {
      const users = await User.paginate({}, { limit: 10, page: 5 })

      return users
    } catch (error) {
      return error
    }
  }

  async insertMany(usersInfo) {
    try {
      const newUsers = await User.insertMany(usersInfo)
      return newUsers
    } catch (error) {
      return error
    }
  }

  async updateOne(userId, productId) {
    try {
      const user = await User.findOne({ _id: userId })
      user.products.push({ product: productId })
      const response = User.updateOne({ _id: userId }, user)
      return response
    } catch (error) {
      return error
    }
  }

  async deleteMany() {
    await User.deleteMany()
    return 'Usuarios eliminados'
  }
}

module.exports = UserDao