const express = require('express')
const morgan = require('morgan')
const { PLANET_PORT, CHARACTER_PORT, FILM_PORT, PORT } = require('./config/envs')
const {createProxyMiddleware} = require('http-proxy-middleware')


const app = express()
app.use(morgan('dev'))

app.use('/Character', createProxyMiddleware({
  target: CHARACTER_PORT,
  changeOrigin: true
}))

app.use('/Film', createProxyMiddleware({
  target: FILM_PORT,
  changeOrigin: true
}))

app.use('/Planet', createProxyMiddleware({
  target: PLANET_PORT,
  changeOrigin: true
}))

app.listen(PORT, () => {
  console.log(`Gateway listen on port ${PORT}`)
})

