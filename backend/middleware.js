const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const express = require('express')

module.exports = function (app, passport) {
  app.use(bodyParser.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }))
  app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
  }))
  app.use(cookieParser("secretcode"))
  app.use(passport.initialize())
  app.use(passport.session())
  require('./passport-config')(passport)
}