const socket = io()

const messageFromServer = document.getElementById('messageFromServer')
const chatBox = document.getElementById('chatBox')
const messages = document.getElementById('messages')

const startChat = async () => {
  const result = await Swal.fire({
    title: "Identificate",
    input: "text",
    text: "Ingresa el usuario para identificarte en el chat",
    inputValidator: value => {
      return !value && 'Necesitas escribir un usuario'
    },
  })

  const user = result.value
  socket.emit('newUser', user)

  socket.on('newUserConnected', user => {
    Swal.fire({
      text: `${user} acaba de conectarse`,
      toast: true,
      position: 'top-right'
    })
  })
  socket.on('allChats', data => {
    if (data.length > 0 && user) {
      console.log(user)
      console.log('el usuario')
      data.forEach(message => messages.innerHTML += `El usuario ${message.user} dice: ${message.message}<br>`)
    }
  })

  chatBox.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      const userMessage = {
        user,
        message: chatBox.value
      }
      socket.emit('chatFromClient', userMessage)
      chatBox.value = ''
    }
  })

  socket.on('messageForChat', data => {
    messages.innerHTML += `El usuario ${data.user} dice: ${data.message}<br>`
  })
}
startChat()


