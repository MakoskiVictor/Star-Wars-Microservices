const { Schema } = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const characterSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  name: String,
  image: String,
  description: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: 'Planet' },
  films: [{ type: String, ref: 'Film' }]
})

characterSchema.statics.list = async function () {
  return await this.find().populate('homeworld', ['_id', 'name']).populate('films', ['_id', 'title'])
}

characterSchema.statics.getById = async function (id) {
  return await this.findById(id).populate('homeworld', ['_id', 'name']).populate('films', ['_id', 'title'])
}

characterSchema.statics.insert = async function (character) {
  return await this.create(character)
}

characterSchema.statics.errase = async function (id) {
  return await this.findOneAndDelete({ _id: id })
}

module.exports = characterSchema
