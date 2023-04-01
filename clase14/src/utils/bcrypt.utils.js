const bcrypt = require('bcrypt')

const hashPassword = password => {
  const salt = bcrypt.genSaltSync()
  return bcrypt.hashSync(password, salt)
}

const comparePassword = (password, user) => {
  return bcrypt.compareSync(password, user.password)
}

module.exports = {
  hashPassword,
  comparePassword,
}
