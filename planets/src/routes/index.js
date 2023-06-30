const controllers = require('../controllers')
const midlewares = require('../midlewares')

const { Router } = require('express')
const router = Router()

router.get('/planets', controllers.getPlanets)

router.post('/planets', midlewares.planetValidation, controllers.createPlanet)

module.exports = router
