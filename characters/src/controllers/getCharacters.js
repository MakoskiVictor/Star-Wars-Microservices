const Characters = require('../data')
const { response } = require('../utils')
module.exports = async (_req, res) => {
  const character = await Characters.list()
  response(res, 200, character)
}
