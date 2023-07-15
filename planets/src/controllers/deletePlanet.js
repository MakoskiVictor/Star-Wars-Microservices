const { response } = require('../utils')
const { URL_DATABASE } = require('../config/envs')
const axios = require('axios')

module.exports = async (req, res) => {
  const { id } = req.params
  const searchByIDAndDelete = await axios.delete(`${URL_DATABASE}/Planet/${id}`)
  const planetDeleted = searchByIDAndDelete.data
  response(res, 202, planetDeleted)
}
