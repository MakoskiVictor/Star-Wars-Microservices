const { URL_DATABASE } = require('../config/envs')
const { response } = require('../utils')

module.exports = async (_req, res) => {
  const films = await fetch(`${URL_DATABASE}/Film`)
  response(res, 200, films)
}
