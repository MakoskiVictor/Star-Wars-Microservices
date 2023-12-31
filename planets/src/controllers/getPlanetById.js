const { response } = require('../utils')
const { URL_DATABASE } = require('../config/envs')
const axios = require('axios')

module.exports = async (req, res) => {
  const { id } = req.params
  const searchByID = await axios.get(`${URL_DATABASE}/Planet/${id}`)
  const planet = searchByID.data
  response(res, 200, planet)
}
