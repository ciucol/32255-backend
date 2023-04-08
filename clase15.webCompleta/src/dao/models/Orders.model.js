const mongoose = require('mongoose')

const collectionName = 'orders'

const collectionSchema = new mongoose.Schema({
  number: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurant',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  products: [],
  totalPrice: Number,
})

const Orders = mongoose.model(collectionName, collectionSchema)

module.exports = Orders
