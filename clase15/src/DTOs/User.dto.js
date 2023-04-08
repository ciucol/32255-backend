class UserDTO {
  constructor(user) {
    this.first_name = user.name
    this.last_name = user.lastname
    this.email = user.email
    this.phone = user.phone ? user.phone.replace(/[-\s]/g, '') : ''
    this.status = true
    this.role = 'user'
    console.log('usando el DTO')
  }
}

module.exports = UserDTO
