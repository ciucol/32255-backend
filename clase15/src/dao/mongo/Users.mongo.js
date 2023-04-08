const Users = require('./models/Users.model')

class UsersMongoDAO {
  constructor() {}

  async getAll() {
    try {
      console.log('mongo dao')
      return await Users.find()
    } catch (error) {
      throw error
    }
  }

  async insert(newUserInfo) {
    try {
      console.log('mongo dao')
      return await Users.create(newUserInfo)
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersMongoDAO
