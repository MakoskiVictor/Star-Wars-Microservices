const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', controllers.getCharacters)

router.post('/', controllers.createCharacter)

module.exports = router
