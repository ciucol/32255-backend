const mongoose = require('mongoose')

const collectionName = 'user'

const collectionSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
})

const Users = mongoose.model(collectionName, collectionSchema)

module.exports = Users
