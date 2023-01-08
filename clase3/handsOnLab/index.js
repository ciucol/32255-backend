import ManagerUsuarios from './class/ManagerUsuarios.js'

const manager = new ManagerUsuarios()

const users = async () => {
  const consultarUsuario = await manager.consultarUsuarios()
  console.log(consultarUsuario)

  const user = {
    name: "Esmeralda",
    country: "mex",
    student: true
  }

  const response = await manager.crearUsuario(user)
  console.log(response)
}

users()