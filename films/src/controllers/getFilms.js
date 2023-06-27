const Films = require('../data')

module.exports = async (_req, res) => {
  const films = await Films.list()
  res.send(films)
}
