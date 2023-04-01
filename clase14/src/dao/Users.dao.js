const Users = require('../models/Users.model')

class UsersDao {
  constructor() {}
  async getUsers() {
    try {
      const users = await Users.find()
      return users
    } catch (error) {
      return error
    }
  }

  async nuevoUsuario(newUserInfo) {
    try {
      const user = await Users.insertOne(newUserInfo)
      return user
    } catch (error) {
      return error
    }
  }
}

module.exports = UsersDao
