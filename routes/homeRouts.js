const { render } = require('ejs')
const express = require('express')
const homeController = require('../controllers/homeController')
const router = express.Router()

router.get('/', homeController.home_get)

router.get('/create', homeController.category_create_get)

router.post('/', homeController.category_create_post)

module.exports = router
