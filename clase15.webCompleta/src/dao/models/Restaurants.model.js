const mongoose = require('mongoose')

const collectionName = 'restaurant'

const collectionSchema = new mongoose.Schema({
  name: String,
  products: [],
})

const Restaurants = mongoose.model(collectionName, collectionSchema)

module.exports = Restaurants
