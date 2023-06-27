const Characters = require('../data')
module.exports = async (_req, res) => {
  const character = await Characters.list()
  res.send(character)
}
