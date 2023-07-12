const { response } = require('../utils')
const store = require('../database')

module.exports = async (req, res) => {
  const { model } = req.params
  const form = req.body
  const data = await store[model].insert(form)
  response(res, 201, data)
}
