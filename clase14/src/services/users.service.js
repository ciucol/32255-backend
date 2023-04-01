const { hashPassword } = require('../utils/bcrypt.utils')
const store = require('../store/users.store')

const createUser = async user => {
  try {
    const { name, lastName, email, password } = user

    const newUserInfo = {
      name,
      lastName,
      email,
      password: hashPassword(password),
    }

    const newUser = await store.createUser(newUserInfo)

    const newUserReturn = {
      id: newUser._id,
      name: newUser.name,
      lastName: newUser.lastName,
      email: newUser.email,
    }

    return newUserReturn
  } catch (error) {
    return error
  }
}

module.exports = {
  createUser,
}
