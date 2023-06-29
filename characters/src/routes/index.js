const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')
const middlewares = require('../middlewares')

router.get('/', controllers.getCharacters)

router.post('/', middlewares.characterValidation, controllers.createCharacter)

module.exports = router
