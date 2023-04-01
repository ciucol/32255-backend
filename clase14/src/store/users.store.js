const UsersDao = require('../dao/Users.dao')

const Users = new UsersDao()
const createUser = async newUserInfo => {
  try {
    const newUser = await Users.nuevoUsuario(newUserInfo)
    return newUser
  } catch (error) {
    return error
  }
}

module.exports = {
  createUser,
}
