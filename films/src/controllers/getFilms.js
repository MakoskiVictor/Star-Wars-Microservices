const { URL_DATABASE } = require('../config/envs')
const { response } = require('../utils')
const axios = require('axios')

module.exports = async (_req, res) => {
  const search = await axios.get(`${URL_DATABASE}/Film`)
  const seachedData = search.data
  response(res, 200, seachedData)
}
