/* eslint-disable camelcase */
const { ClientError } = require('../utils/errors')

module.exports = (req, res, next) => {
  const { name, image, description, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, res_idents, films } = req.body
  if (name &&
      image &&
      description &&
      rotation_period &&
      orbital_period &&
      diameter &&
      climate &&
      gravity &&
      terrain &&
      surface_water &&
      res_idents &&
      films
  ) return next()
  else throw new ClientError('Name is missing', 403)
}
