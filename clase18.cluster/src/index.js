const cluster = require('cluster')
const { cpus } = require('os')
const express = require('express')

const numeroDeNucleos = cpus().length

if (cluster.isPrimary) {
  console.log('Proceso primario, generando workers', process.pid)
  for (let i = 0; i < numeroDeNucleos; i++) {
    cluster.fork()
  }

  // cluster.on('message', (worker, message) => {
  //   console.log(`el worker ${worker.process.pid} envió: ${message}`)
  // })

  cluster.on('exit', worker => {
    console.log(`Murió ${worker.process.pid}, generando nuevo worker`)
    cluster.fork()
  })
} else {
  console.log('Soy un worker ', process.pid)

  // process.send(`Hola desde ${process.pid}`)
  const app = express()

  app.get('/', (req, res) => {
    console.log(`Respuesta del worker ${process.pid}`)
    res.json({ message: `Respuesta del worker ${process.pid}` })
  })

  app.get('/easy', (req, res) => {
    let suma = 0
    for (let i = 0; i < 1000000; i++) {
      suma += i
    }

    res.json({ suma })
  })

  app.get('/veryhard', (req, res) => {
    let suma = 0

    for (let i = 0; i < 5e7; i++) {
      suma += i
    }

    res.json({ suma })
  })

  app.listen(3000, () => {
    console.log(`Server running at port: 3000 con el worker ${process.pid}`)
  })
}
