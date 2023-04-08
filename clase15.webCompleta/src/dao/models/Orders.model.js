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

collectionSchema.pre('find', function () {
  this.populate('restaurant').populate('user')
})

const Orders = mongoose.model(collectionName, collectionSchema)

module.exports = Orders
