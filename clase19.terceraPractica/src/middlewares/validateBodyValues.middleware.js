const UserDTO = require('../DTOs/User.dto')

const validateBodyValues = (...values) => {
  return (req, res, next) => {
    req.user = new UserDTO(req.body)

    const propertiesNotFound = values.filter(
      property => !(req.user.hasOwnProperty(property) && req.user[property])
    )

    if (propertiesNotFound.length > 0) {
      let errors = []
      propertiesNotFound.forEach(property =>
        errors.push(`${property} not found`)
      )

      return res.status(400).json({ status: 'error', error: errors })
    }

    next()
  }
}

module.exports = validateBodyValues
