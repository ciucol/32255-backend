const mongoose = require('mongoose')

const collectionName = 'user'

const collectionSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: {
    type: String,
    default: 'user',
  },
  orders: {
    type: [
      {
        order: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'order',
        },
      },
    ],
    default: [],
  },
})

const Users = mongoose.model(collectionName, collectionSchema)

module.exports = Users
