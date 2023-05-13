class UserDTO {
  constructor(info) {
    console.log('desde el dto')
    this.first_name = info.first_name
    this.last_name = info.last_name
    this.email = info.email
    this.password = info.password
    this.number = info.number
  }
}

module.exports = UserDTO
