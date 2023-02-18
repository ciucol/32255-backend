const mongoose = require('mongoose')

const productCollection = 'product'

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
})

const Product = mongoose.model(productCollection, productSchema)

module.exports = Product