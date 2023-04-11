const Category = require('../models/category')

exports.categories_list_get = (req, res) => {
  Category.find().then((result) => {
    res.render('categories_list', { title: 'Categories' })
  })

  // res.send('Categories list get not implemented')
}

exports.categories_create_get = (req, res) => {
  res.send('Categories create get not implemented')
}

exports.categories_create_post = (req, res) => {
  res.send('Categories create post not implemented')
}

exports.categories_update_get = (req, res) => {
  res.send('Categories update get not implemented')
}

exports.categories_update_patch = (req, res) => {
  res.send('Categories update patch not implemented')
}

exports.categories_delete_get = (req, res) => {
  res.send('Categories delete get not implemented')
}

exports.categories_delete_post = (req, res) => {
  res.send('Categories delete post not implemented')
}
