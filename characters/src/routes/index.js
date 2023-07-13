const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')
const middlewares = require('../middlewares')

router.get('/characters', controllers.getCharacters)

router.get('/characters/:id', middlewares.idValidator, controllers.getCharacterById)

router.post('/characters', middlewares.characterValidation, controllers.createCharacter)

router.get('/characters/:id', middlewares.idValidator, controllers.deleteCharacter)

module.exports = router
