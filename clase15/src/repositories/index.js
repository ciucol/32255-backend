const UsersRepository = require('./Users.repository')
const UsersDAO = require('../dao/factory')

const usersRepository = new UsersRepository(new UsersDAO())

module.exports = usersRepository
