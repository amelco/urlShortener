const passport = require('passport')
const bcrypt = require('bcryptjs')
const ShortUrl = require('./models/shortUrl')
const User = require('./models/user')

module.exports = function(app) {

  app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err
      if (!user) {
        res.send({error: "Usuário/Senha incorreta(s)"})
      }
      else {
        req.logIn(user, err => {
          if (err) throw err
          res.send("Autenticação feita com sucesso")
        })
      }
    })(req, res, next)
  })
  
  app.post("/register", (req, res) => {
    User.findOne({username: req.body.username}, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send({error: "Usuário já existe"})
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword
        })
        await newUser.save()
        res.send({msg: "Usuário criado."})
      }
    })
  })
  
  app.get("/user", (req, res) => {
    res.send(req.user)
  })

  app.get('/getList', async (req, res) => {
    const list = await ShortUrl.find({}).sort({date: -1})
    res.send(list)
  })

  app.post('/shortUrls', async (req, res) => {
    let url = req.body.full
    if (url.indexOf("http") < 0) {
      url = "https://" + url
    }
    res.send(await ShortUrl.create({ full: url }))
  })

  app.get('/:shortUrl', async (req, res) => {
    const url = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (url) {
      res.redirect(url.full)
    }
  })

}