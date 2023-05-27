import chai from 'chai'
import { createHash, passwordValidation } from '../src/utils/index.js'

const expect = chai.expect

describe('Testear la utilidad de bcrypt', () => {
  const mockUser = {
    first_name: 'Mate',
    last_name: 'Naran',
    email: 'mate@naran.com',
    password: 'mate123',
  }

  it('El servicio debe realizar un hasheo efectivo de la contraseña (debe corroborarse que el resultado sea diferente a la contraseña original', async function () {
    const result = await createHash(mockUser.password)

    // expect(result).is.not.equal(mockUser.password)
    const regex =
      /(?=[A-Za-z0-9@#$%/^.,{}&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/g
    expect(result).to.match(regex)
  })

  it('El hasheo realizado debe poder compararse de manera efectiva con la contraseña original (la comparación debe resultar en true)', async function () {
    const passwordHashed = await createHash(mockUser.password)

    const userPasswordHashed = {
      password: passwordHashed,
    }

    const result = await passwordValidation(
      userPasswordHashed,
      mockUser.password
    )
    expect(result).is.equal(true)
  })

  it('Si la contraseña hasheada se altera, debe fallar en la comparación de la contraseña original.', async function () {
    const passwordHashed =
      '$2b$10$6lQF9XJ4WPqOI8lHo5y4T.1E2lXzZYrAbXop./K6v08iHqF1CtxAu'
    const userPasswordHashed = {
      password: passwordHashed,
    }

    const result = await passwordValidation(
      userPasswordHashed,
      mockUser.password
    )
    expect(result).is.equal(false)
  })
})
