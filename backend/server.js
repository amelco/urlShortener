const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

const routes = require('./routes')
const middleware = require('./middleware')

const app = express()

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

middleware(app, passport)
routes(app)

app.listen(process.env.port || 5000);