const usuario = {
  nombre: 'Mate',
  edad: 20,
  activo: true
}

const auth = {
  usuario: "mate@naran.com",
  password: 'j32h4gt376gdr83rtd83w'
}

const usuarioFull = { ...usuario, ...auth }


const { password, ...infoUser } = usuarioFull

const response = {
  ...infoUser,
}

console.log(response)
