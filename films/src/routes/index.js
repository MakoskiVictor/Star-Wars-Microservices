const controllers = require('../controllers')

const { Router } = require('express')
const router = Router()

router.get('/', controllers.getFilms)

module.exports = router
