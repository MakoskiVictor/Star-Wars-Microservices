/* eslint-disable camelcase */
const { ClientError } = require('../utils/errors')

module.exports = (req, _res, next) => {
  const { name, image, description, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films } = req.body
  if (name &&
    image &&
    description &&
    height &&
    mass &&
    hair_color &&
    skin_color &&
    eye_color &&
    birth_year &&
    gender &&
    homeworld &&
    films) return next()
  else throw new ClientError('Name is missing', 401)
}
