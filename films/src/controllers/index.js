const { catchAsync } = require('../utils')

module.exports = {
  getFilms: catchAsync(require('./getFilms')),
  postFilm: catchAsync(require('./postFilm')),
  getFilmById: catchAsync(require('./getFilmById')),
  deleteFilm: catchAsync(require('./deleteFilm'))
}
