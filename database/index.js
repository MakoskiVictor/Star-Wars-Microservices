const server = require('./src/server')
/* const { Character, Film, Planet } = require('./src/database') */
const PORT = 8004

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
