const { response } = require('../utils')
const { URL_DATABASE } = require('../config/envs')
const axios = require('axios')

module.exports = async (_req, res) => {
  const search = await axios.get(`${URL_DATABASE}/Character`)
  const searchedData = search.data
  response(res, 200, searchedData)
}
