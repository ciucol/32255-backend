const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
const router = require('./router')

const port = 3000
const messages = []
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

router(app)

const httpServer = app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

const io = new Server(httpServer)

io.on('connection', socket => {
  console.log(`New client with id: ${socket.id}`)

  socket.on('newUser', user => {
    socket.broadcast.emit('newUserConnected', user)
    socket.emit('allChats', messages)
  })

  socket.on('chatFromClient', data => {
    messages.push(data)
    io.emit('messageForChat', data)
  })
})