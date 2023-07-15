const express = require('express')
const morgan = require('morgan')

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(require('./routes'))

server.use('*', (_req, res) => {
  res.status(404).send('Not Found')
})

server.use((ClientError, err, _req, res, _next) => {
  if (!ClientError) {
    res.send({
      error: true,
      message: err.message
    })
  } else {
    res.status(ClientError.statusCode).send({
      error: true,
      message: ClientError.message
    })
  }
})

module.exports = server
