class UsersMemoryDAO {
  constructor() {
    this.data = []
  }

  async getAll() {
    try {
      console.log('memory dao')
      return this.data
    } catch (error) {
      return error
    }
  }

  async insert(newUserInfo) {
    try {
      this.data.push(newUserInfo)

      console.log('memory dao')
      return newUserInfo
    } catch (error) {
      return error
    }
  }
}

module.exports = UsersMemoryDAO
