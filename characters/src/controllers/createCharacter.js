const { response } = require('../utils')
const Characters = require('../data')

module.exports = async (_req, res) => {
  const character = await Characters.created()
  response(res, 201, character)
}
