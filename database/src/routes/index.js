const { Router } = require('express')
const { validateModel } = require('../middlewares')
const { getList, getById, postItem, deleteItem } = require('../controllers')

const router = Router()

router.get('/:model', validateModel, getList)

router.get('/:model/:id', validateModel, getById)

router.post('/:model', validateModel, postItem)

router.delete('/:model/:id', validateModel, deleteItem)

module.exports = router
