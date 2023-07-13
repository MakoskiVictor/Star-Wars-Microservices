const { catchAsync } = require('../utils')

module.exports = {
  getCharacters: catchAsync(require('./getCharacters')),
  createCharacter: catchAsync(require('./createCharacter')),
  getCharacterById: catchAsync(require('./getCharacterById')),
  deleteCharacter: catchAsync(require('./deleteCharacter'))
}
