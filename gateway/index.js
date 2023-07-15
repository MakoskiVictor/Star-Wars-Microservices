const express = require('express')
const morgan = require('morgan')
const { PLANET_PORT, CHARACTER_PORT, FILM_PORT, PORT } = require('./config/envs')
const {createProxyMiddleware} = require('http-proxy-middleware')


const app = express()
app.use(morgan('dev'))

app.get('./', (req, res) => {
  res.status(200).send({
    getAllCharacters: '/characters',
    getAllPlanets: '/planets',
    getAllFilms: '/films',
    getCharacterById: '/characters/id',
    getPlanetById: '/planets/id',
    getFilmById: '/films/id',
    postCharacter: '/characters',
    postPlanet: '/planets',
    postFilm: '/films',
    deleteCharacter: '/characters/id',
    deletePlanet: '/planets/id',
    deleteFilm: '/planets/id'
  })
})

app.use('/characters', createProxyMiddleware({
  target: CHARACTER_PORT,
  changeOrigin: true
}))

app.use('/films', createProxyMiddleware({
  target: FILM_PORT,
  changeOrigin: true
}))

app.use('/planets', createProxyMiddleware({
  target: PLANET_PORT,
  changeOrigin: true
}))

app.listen(PORT, () => {
  console.log(`Gateway listen on port ${PORT}`)
})

