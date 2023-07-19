const server = require('./src/server')
// const { PORT } = require('./src/config/envs')

const PORT = 8003

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
