const { response } = require('../utils')
const { URL_DATABASE } = require('../config/envs')
const axios = require('axios')
// Falta probar
module.exports = async (req, res) => {
  const form = req.body
  await axios.post(`${URL_DATABASE}/Planet`, form)
  response(res, 201)
}
