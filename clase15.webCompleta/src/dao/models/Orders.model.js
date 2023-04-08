const mongoose = require('mongoose')

const collectionName = 'orders'

const collectionSchema = new mongoose.Schema({
  number: String,
  restaunt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurant',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  products: [],
  totalPrice: number,
})

const Orders = mongoose.model(collectionName, collectionSchema)

module.exports = Orders
