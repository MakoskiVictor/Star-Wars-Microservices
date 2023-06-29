const express = require('express')
const morgan = require('morgan')

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(require('./routes'))

server.use('*', (_req, res) => {
  res.status(404).send('Not Found')
})

server.use((ClientError, req, res, next) => {
  res.status(ClientError.statusCode).send({
    error: true,
    message: ClientError.message
  })
})

module.exports = server
