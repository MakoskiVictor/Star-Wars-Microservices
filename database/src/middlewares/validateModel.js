const { ClientError } = require('../utils/errors')

module.exports = (req, _res, next) => {
  const { model } = req.params
  if (['Character', 'Planet', 'Film'].includes(model)) {
    return next()
  } else {
    throw new ClientError('Invalid model', 404)
  }
}
