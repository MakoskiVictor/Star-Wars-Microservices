const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
// const { PLANET_PORT, CHARACTER_PORT, FILM_PORT, PORT } = require('./config/envs')
const {createProxyMiddleware} = require('http-proxy-middleware')


const app = express()

const PORT = 8000

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
}

app.use(morgan('dev'))


app.use(cors(corsOptions))

app.use('/characters', createProxyMiddleware({
  target: 'http://characters:8001/',
  changeOrigin: true
}))

app.use('/films', createProxyMiddleware({
  target: 'http://films:8002/',
  changeOrigin: true
}))

app.use('/planets', createProxyMiddleware({
  target: 'http://planets:8003/',
  changeOrigin: true
}))

app.get('/', (_req, res) => {
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

app.listen(PORT, () => {
  console.log(`Gateway listen on port ${PORT}`)
})

