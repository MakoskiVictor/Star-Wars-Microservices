const server = require('./src/server')
const { PORT } = require('./config/envs')

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
