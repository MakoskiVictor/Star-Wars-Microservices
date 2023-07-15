const controllers = require('../controllers')
const midlewares = require('../midlewares')

const { Router } = require('express')
const router = Router()

router.get('/planets', controllers.getPlanets)

router.get('/planets/:id', midlewares.idValidator, controllers.getPlanetById)

router.post('/planets', midlewares.planetValidation, controllers.createPlanet)

router.delete('/planets/:id', midlewares.idValidator, controllers.deletePlanet)

module.exports = router
