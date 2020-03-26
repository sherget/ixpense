const mongoose = require('mongoose')

const categorieSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Categorie', categorieSchema)
