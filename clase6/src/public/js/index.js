const socket = io()

const messageFromServer = document.getElementById('messageFromServer')
const chat = document.getElementById('chat')
const messages = document.getElementById('messages')

socket.emit('messageFromClient', 'Este es un mensaje desde el cliente')

socket.on('messageFromServer', data => {
  messageFromServer.innerHTML = data
})

chat.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    socket.emit('chatFromClient', chat.value)
  }
})

socket.on('messageForChat', data => {
  messages.innerHTML = data
})