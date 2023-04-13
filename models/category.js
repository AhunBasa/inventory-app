const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

CategorySchema.virtual('url').get(function () {
  return `/categories/${this._id}`
})

CategorySchema.virtual('createdAtFormatted').get(function () {
  return this.createdAt.toLocaleString()
})

CategorySchema.virtual('updatedAtFormatted').get(function () {
  return this.updatedAt.toLocaleString()
})
module.exports = mongoose.model('Category', CategorySchema)
