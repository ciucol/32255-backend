import mongoose from 'mongoose'
import UsersDAO from '../src/dao/Users.dao.js'
import Assert from 'assert'

mongoose.connect(
  'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/?retryWrites=true&w=majority'
)

const assert = Assert.strict

describe('Testear DAO de usuarios', () => {
  const mockUser = {
    first_name: 'Mate',
    last_name: 'Naran',
    email: 'mate@naran.com',
    password: 'mate123',
  }

  before(function () {
    this.Users = new UsersDAO()
  })

  beforeEach(async function () {
    this.timeout(5000)
    await mongoose.connection.collections.users.deleteMany({})
  })

  it('El DAO debe poder obtener los usuarios en formato de arreglo', async function () {
    const result = await this.Users.get()
    assert.strictEqual(Array.isArray(result), true)
  })

  it('El Dao debe agregar correctamente un elemento a la base de datos', async function () {
    const result = await this.Users.save(mockUser)
    assert.ok(result._id)
  })

  it('Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto', async function () {
    const result = await this.Users.save(mockUser)

    assert.deepStrictEqual(result.pets, [])
  })

  it('El Dao puede obtener a un usuario por email', async function () {
    const user = await this.Users.save(mockUser)

    const result = await this.Users.getBy({ email: user._id })
    assert.strictEqual(typeof user, 'object')
  })
})
