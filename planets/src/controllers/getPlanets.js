const { response } = require('../utils')
const axios = require('axios')
const { URL_DATABASE } = require('../config/envs')

module.exports = async (_req, res) => {
  const search = await axios.get(`${URL_DATABASE}/Planet`)
  const planets = search.data
  response(res, 200, planets)
}
