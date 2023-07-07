const { URL_DATABASE } = require('../config/envs')
const { response } = require('../utils')

module.exports = async (req, res) => {
  const data = req.body
  const films = await fetch(`${URL_DATABASE}/Film`, data)
  response(res, 201, films)
}
