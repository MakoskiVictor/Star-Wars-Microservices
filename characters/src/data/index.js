const characters = require('./characters.json')

module.exports = {
  list: async () => {
    return characters
  },
  created: async () => {
    /* throw new Error({ error: Error.message }) */
    return { message: 'Character created succesfully!' }
  }
}
