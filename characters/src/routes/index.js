const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')
const middlewares = require('../middlewares')

router.get('/characters', controllers.getCharacters)

router.post('/characters', middlewares.characterValidation, controllers.createCharacter)

module.exports = router
