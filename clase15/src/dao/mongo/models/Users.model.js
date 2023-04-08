const mongoose = require('mongoose')

const collectionName = 'users'

const collectionSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    unique: true,
    type: String,
  },
  phone: String,
  status: Boolean,
  role: String,
})

const Users = mongoose.model(collectionName, collectionSchema)

module.exports = Users
