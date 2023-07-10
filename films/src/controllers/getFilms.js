const { URL_DATABASE } = require('../config/envs')
const { response } = require('../utils')

module.exports = async (_req, res) => {
  await fetch(`${URL_DATABASE}Film`)
    .then(response => response.json())
    .then(data => response(res, 200, data))
}
