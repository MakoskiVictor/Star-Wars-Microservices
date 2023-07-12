const { response } = require('../utils')
const store = require('../database')

module.exports = async (req, res) => {
  const { model, id } = req.params
  const data = await store[model].errase(id)
  response(res, 204, data)
}
