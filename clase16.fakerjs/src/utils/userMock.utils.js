const { faker } = require('@faker-js/faker')

faker.locale = 'es'

const generateUsersAndProducts = userNumbers => {
  const users = []
  for (let u = 0; u < userNumbers; u++) {
    users.push(generateUsers())
  }

  return users
}

const generateUsers = () => {
  const numOfProducts = Number(faker.random.numeric(1, { bannedDigits: ['0'] }))

  const products = []
  for (let i = 0; i < numOfProducts; i++) {
    products.push(generateProducts())
  }

  return {
    name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    birthDate: faker.date.birthdate(),
    phone: faker.phone.number(),
    products,
    role: faker.helpers.arrayElement(['cliente', 'vendedor']),
    premium: faker.datatype.boolean(),
    jobTitle: faker.name.jobTitle(),
    job: faker.name.jobType(),
  }
}

const generateProducts = () => {
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    stock: faker.random.numeric(2),
    description: faker.lorem.lines(),
  }
}

module.exports = {
  generateUsersAndProducts,
}
