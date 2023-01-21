const express = require('express')
const port = 8000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hi al get')
})

const users = [
  {
    id: 1,
    nombre: 'Liz',
    apellido: 'Macías',
    edad: 20,
    country: 'arg'
  },
  {
    id: 2,
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    country: 'per'
  },
  {
    id: 3,
    nombre: 'Pedro',
    apellido: 'Gómez',
    edad: 40,
    country: 'arg'
  },
  {
    id: 4,
    nombre: 'María',
    apellido: 'García',
    edad: 50,
    country: 'col'
  }
]

app.get('/users', (req, res) => {
  const { country } = req.query

  if (!country) {
    return res.status(200).json({ message: users })
  }

  const filterUsers = users.filter(user => user.country === country)
  if (filterUsers.length === 0) res.status(400).json({ error: 'Usuario no encontrado' })

  res.status(200).json({ message: filterUsers })
})

app.get('/users/:id', (req, res) => {
  const { id } = req.params
  const user = users.filter(user => user.id === Number(id))

  res.json({ message: user })
})

app.post('/users', (req, res) => {
  const { nombre, apellido, edad, country } = req.body

  const newUser = {
    nombre,
    apellido,
    edad,
    country
  }

  users.push(newUser)
  res.json({ message: 'Usuario creado' })
})


app.put('/users/:id', (req, res) => {
  const { id } = req.params
  const infoUser = req.body

  const user = users.find(user => user.id === id)

})

app.patch('/users/:id', (req, res) => {
  req.body
})

app.delete('/users/:id', (req, res) => {

})

app.get('/bienvenida', (req, res) => {
  res.send("<h1 style='color: green;'>Hola a todos</h1>")
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})