const { ClientError } = require('../utils/errors')

module.exports = (req, _res, next) => {
  const id = req.params
  if (id) return next()
  else throw new ClientError('ID is missing', 401)
}
