const { URL_DATABASE } = require('../config/envs')
const { response } = require('../utils')
const axios = require('axios')

module.exports = async (req, res) => {
  const data = req.body
  const films = await axios.post(`${URL_DATABASE}/Film`, data)
  response(res, 201, films)
}
