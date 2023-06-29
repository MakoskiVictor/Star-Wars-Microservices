const { ClientError } = require('../utils/errors')

module.exports = (req, _res, next) => {
  const { title } = req.body
  if (title) return next()
  else throw new ClientError('Title is missing', 401)
}
