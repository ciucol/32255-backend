const mongoose = require('mongoose')

const usersCollection = 'users'

const usersSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin', 'superadmin'],
    default: 'user',
  },
  number: String,
})

const Users = mongoose.model(usersCollection, usersSchema)

module.exports = Users
