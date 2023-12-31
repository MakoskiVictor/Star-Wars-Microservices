const { Schema } = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const planetSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  name: String,
  image: String,
  description: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  res_idents: [{ type: String, ref: 'Character' }],
  films: [{ type: String, ref: 'Film' }]
})

planetSchema.statics.list = async function () {
  return await this.find().populate('res_idents', ['_id', 'name']).populate('films', ['_id', 'name'])
}

planetSchema.statics.getById = async function (id) {
  return await this.findById(id).populate('res_idents', ['_id', 'name']).populate('films', ['_id', 'name'])
}

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet)
}

planetSchema.statics.errase = async function (id) {
  return await this.findOneAndDelete({ _id: id })
}

module.exports = planetSchema
