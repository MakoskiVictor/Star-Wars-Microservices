const controllers = require('../controllers')
const midlewares = require('../midlewares')

const { Router } = require('express')
const router = Router()

router.get('/films', controllers.getFilms)

router.get('/films/:id', midlewares.idValidator, controllers.getFilmById)

router.post('/films', midlewares.filmsValidation, controllers.postFilm)

router.delete('./films/:id', midlewares.idValidator, controllers.deleteFilm)

module.exports = router
