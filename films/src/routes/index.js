const controllers = require('../controllers')
const midlewares = require('../midlewares')

const { Router } = require('express')
const router = Router()

router.get('/Film', controllers.getFilms)

router.post('/Film', midlewares.filmsValidation, controllers.postFilm)

module.exports = router
