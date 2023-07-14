/* eslint-disable camelcase */
const { ClientError } = require('../utils/errors')

module.exports = (req, _res, next) => {
  const { title, image, opening_crawl, director, producer, release_date, characters, planets } = req.body
  if (title &&
      image &&
      opening_crawl &&
      director &&
      producer &&
      release_date &&
      characters &&
      planets
  ) return next()
  else throw new ClientError('Information is missing', 403)
}
