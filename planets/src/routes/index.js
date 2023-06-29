const controllers = require('../controllers')
const midlewares = require('../midlewares')

const { Router } = require('express')
const router = Router()

router.get('/', controllers.getPlanets)

router.post('/', midlewares.planetValidation, controllers.createPlanet)

module.exports = router
