const UsersDAO = require('../DAOs/mongo/Users.dao')
const notifySender = require('../repository')

const Users = new UsersDAO()

const userCreate = async newUserInfo => {
  try {
    const newUser = await Users.create(newUserInfo)

    const notifyForNewUser = {
      subject: 'Bienvenido a la plataforma',
      message: 'Nos encanta que estés acá',
    }

    const smsResponse = await notifySender.sendNotification(
      newUserInfo,
      notifyForNewUser
    )

    console.log(smsResponse)

    return newUser
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  userCreate,
}
