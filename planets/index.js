const server = require('./src/server')
const { PORT } = require('./src/config/envs')

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
