import fs from 'fs'

const path = './files/usuarios.js'

export default class ManagerUsuarios {
  async consultarUsuarios() {
    try {
      if (fs.existsSync(path)) {
        const data = await fs.promises.readFile(path, 'utf-8')
        const users = JSON.parse(data)
        return users
      }
      return []

    } catch (error) {
      console.log(error)
    }
  }

  async crearUsuario(usuario) {
    try {
      const users = await this.consultarUsuarios()
      if (users.length === 0) {
        usuario.id = 1
      } else {
        // const userLastPosition = users[users.length]
        // const newId = userLastPosition.id + 1
        // usuario.id = newId

        usuario.id = users[users.length - 1].id + 1
      }
      users.push(usuario)

      await fs.promises.writeFile(path, JSON.stringify(users, null, '\t'))
      return usuario
    } catch (error) {
      console.log(error)
    }
  }
}
