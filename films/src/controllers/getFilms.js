const Films = require('../data')
const { response } = require('../utils')

module.exports = async (_req, res) => {
  const films = await Films.list()
  response(res, 200, films)
}
