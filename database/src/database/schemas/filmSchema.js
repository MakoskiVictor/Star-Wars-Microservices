const { Schema } = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const filmSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  title: String,
  image: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: 'Character' }],
  planets: [{ type: String, ref: 'Planet' }]
})

filmSchema.statics.list = async function () {
  return await this.find().populate('characters', ['_id', 'name']).populate('planets', ['_id', 'name'])
}

filmSchema.statics.getById = async function (id) {
  return await this.findById(id).populate('characters', ['_id', 'name']).populate('planets', ['_id', 'name'])
}

filmSchema.statics.insert = async function (film) {
  return await this.create(film)
}

filmSchema.statics.errase = async function (id) {
  return await this.findOneAndDelete({ _id: id })
}

module.exports = filmSchema
