const { response } = require('../utils')
const { URL_DATABASE } = require('../config/envs')
const axios = require('axios')
// Falta probar
module.exports = async (req, res) => {
  const form = req.body
  const character = await axios.get(`${URL_DATABASE}/Character`, form)
  response(res, 201, character)
}
