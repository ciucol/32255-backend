const mongoose = require('mongoose')
const {
  dbAdmin,
  dbPassword,
  dbHost,
  dbName,
} = require('../src/config/db.config')

console.log(dbAdmin)

class MongoConnect {
  static #instance

  constructor() {
    this.mongoConnect()
  }

  async mongoConnect() {
    try {
      await mongoose.connect(
        `mongodb+srv://${dbAdmin}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
      )
      console.log('db is connected')
    } catch (error) {
      console.log(error)
    }
  }

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new MongoConnect()
      console.log('original')
      return this.#instance
    }
    console.log('copia')
    return this.#instance
  }
}

module.exports = MongoConnect
