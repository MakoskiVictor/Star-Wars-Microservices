const { Router } = require('express')
const { validateModel } = require('../middlewares')
const { getList, getById, postItem } = require('../controllers')

const router = Router()

router.get('/:model', validateModel, getList)

router.get('/:model/:id', validateModel, getById)

router.post('/:model', validateModel, postItem) // POST NO PROBADO

module.exports = router
