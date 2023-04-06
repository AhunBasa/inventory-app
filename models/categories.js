const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categoriesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

categoriesSchema.virtual('url').get(function () {
  return `/categories/${this._id}`
})

module.exports = mongoose.model('Categories', categoriesSchema)
