const express = require('express')
const homeRouter = require('./routes/homeRouts')
const mongoose = require('mongoose')
const URI = require('./uri')

const app = express()

mongoose
  .connect(URI)
  .then((result) => {
    console.log('Connected to MongoDB')
    app.listen(3000)
  })
  .catch((err) => {
    console.log(err)
  })

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/categories', homeRouter)
app.get('/', (req, res) => {
  res.redirect('/categories')
})
