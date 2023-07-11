const axios = require('axios')
const { response } = require('../utils')
const { URL_DATABASE } = require('../config/envs')

module.exports = async (req, res) => {
  const { id } = req.params
  const searchFilm = await axios.get(`${URL_DATABASE}/Film/${id}`)
  const Film = searchFilm.data
  response(res, 200, Film)
}
