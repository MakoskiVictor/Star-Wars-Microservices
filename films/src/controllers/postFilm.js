const Films = require('../data')
const { response } = require('../utils')

module.exports = async (_req, res) => {
  const films = await Films.create()
  response(res, 201, films)
}
