const controllers = require('../controllers')
const midlewares = require('../midlewares')

const { Router } = require('express')
const router = Router()

router.get('/', controllers.getFilms)

router.post('/', midlewares.filmsValidation, controllers.postFilm)

module.exports = router
