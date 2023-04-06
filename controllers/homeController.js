const Categories = require('../models/categories')
const { body, validationResult } = require('express-validator')

const home_get = (req, res) => {
  Categories.find()
    .then((result) => {
      res.render('index', {
        title: 'Categories',
        categories: result,
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const category_create_get = (req, res) => {
  res.render('create_category', { title: 'Create Category', errors: [] })
}

const category_create_post = [
  body('category')
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage('Category is too short'),

  (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.render('create_category', {
        title: 'Create Category',
        errors: errors.array(),
      })
      return
    }

    const category = new Categories({ title: req.body.category })
    category
      .save()
      .then((result) => {
        res.redirect('/categories')
      })
      .catch((err) => {
        console.log(err)
      })
  },
]

module.exports = { home_get, category_create_get, category_create_post }
