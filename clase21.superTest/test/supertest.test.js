import chai from 'chai'
import supertest from 'supertest'

const expect = chai.expect

const requester = supertest('http://localhost:8080')

describe('Testing AdoptMe', () => {
  describe('Test de mascotas', () => {
    const petMock = {
      name: 'Pancho',
      specie: 'cat',
      birthDate: '08-28-2022',
    }

    it('El endpoint POST /api/pets debe crear una mascota correctamente', async () => {
      const { statusCode, _body } = await requester
        .post('/api/pets')
        .send(petMock)

      expect(_body.payload).to.have.property('_id')
      expect(statusCode).is.equal(201)
    })

    it('Al crear una mascota sólo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted : false', async () => {
      const { _body } = await requester.post('/api/pets').send(petMock)

      expect(_body.payload).to.have.property('adopted').is.false
    })

    it('Si se desea crear una mascota sin el campo  nombre, el módulo debe responder con un status 400', async () => {
      const petMock = {
        specie: 'cat',
        birthDate: '08-28-2022',
      }

      const { statusCode } = await requester.post('/api/pets').send(petMock)

      expect(statusCode).to.equal(400)
    })

    it('Al obtener a las mascotas con el método GET, la respuesta debe tener los campos status y payload. Además, payload debe ser de tipo arreglo', async () => {
      const { _body } = await requester.get('/api/pets')

      expect(_body).to.have.property('status')
      expect(_body).to.have.property('payload')
      expect(_body.payload).to.be.an('array')
    })

    it('El método PUT debe poder actualizar correctamente a una mascota determinada (esto se puede testear comparando el valor previo con el nuevo valor de la base de datos)', async () => {
      const petUpdatedMock = {
        name: 'Pacheco',
        specie: 'Dog',
        birthDate: '01-12-2022',
      }

      const { _body } = await requester.post('/api/pets').send(petMock)

      const petId = _body.payload._id

      await requester.put(`/api/pets/${petId}`).send(petUpdatedMock)
    })
  })

  describe('Test de users', async () => {
    const cookie = {}
    it('Debe registrar correctamente a un usuario', async () => {
      const mockUser = {
        first_name: 'Mate',
        last_name: 'Naran',
        email: 'mate@naran.com',
        password: 'mate123',
      }

      const { _body } = await requester
        .post('/api/sessions/register')
        .send(mockUser)

      expect(_body.payload).to.be.ok
    })

    it('Debe logear correctamente al usuario y devolver una cookie', async () => {
      const mockUser = {
        email: 'mate@naran.com',
        password: 'mate123',
      }

      const { headers } = await requester
        .post('/api/sessions/login')
        .send(mockUser)

      const cookieResult = headers['set-cookie'][0]
      expect(cookieResult).to.be.ok

      cookie.name = cookieResult.split('=')[0]
      cookie.value = cookieResult.split('=')[1]

      expect(cookie.name).to.be.ok.and.equal('coderCookie')
      expect(cookie.value).to.be.ok
    })

    it('Debe enviar la cookie que contiene el usuario y destructurarlo correctamente', async () => {
      const { _body } = await requester
        .get('/api/sessions/current')
        .set('Cookie', [`${cookie.name}=${cookie.value}`])

      console.log(_body)
      expect(_body.payload.email).to.be.equal('mate@naran.com')
    })
  })
})
