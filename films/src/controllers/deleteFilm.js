const { response } = require('../utils')
const { URL_DATABASE } = require('../config/envs')
const axios = require('axios')
// FALTA PROBAR
module.exports = async (req, res) => {
  const { id } = req.params
  const searchByIDAndDelete = await axios.delete(`${URL_DATABASE}/Film/${id}`)
  const film = searchByIDAndDelete.data
  response(res, 202, film)
}
