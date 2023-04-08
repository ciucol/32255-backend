const UserDTO = require('../DTOs/User.dto')

class UsersRepository {
  constructor(dao) {
    this.dao = dao
  }

  async getAll() {
    try {
      console.log('desde el repository')
      return await this.dao.getAll()
    } catch (error) {
      throw error
    }
  }

  async insert(userInfo) {
    try {
      console.log('desde el repository')
      const newUserInfo = new UserDTO(userInfo)

      return await this.dao.insert(newUserInfo)
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersRepository
