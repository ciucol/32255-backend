const Users = require('./models/Users.model')

class UsersDAO {
  constructor() {}

  async getAll() {
    try {
      return await Users.find()
    } catch (error) {
      throw error
    }
  }

  async getOne(id) {
    try {
      return await Users.findById(id)
    } catch (error) {
      throw error
    }
  }

  async create(newUserInfo) {
    try {
      return await Users.create(newUserInfo)
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersDAO
