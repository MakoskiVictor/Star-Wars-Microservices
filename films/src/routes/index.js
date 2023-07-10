const controllers = require('../controllers')
const midlewares = require('../midlewares')

const { Router } = require('express')
const router = Router()

router.get('/films', controllers.getFilms)

router.post('/films', midlewares.filmsValidation, controllers.postFilm)

module.exports = router
