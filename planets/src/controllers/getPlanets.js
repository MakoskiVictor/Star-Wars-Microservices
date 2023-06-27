const Planets = require('../data')

module.exports = async (_req, res) => {
  const planets = await Planets.list()
  res.send(planets)
}
