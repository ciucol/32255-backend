const express = require('express')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
// const FileStore = require('session-file-store')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const router = require('./router')

// const fileStorage = FileStore(session)
const port = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser('LoQueQuieras'))
app.use(session({
  // store: new fileStorage({ path: __dirname + '/sessions', ttl: 100, retries: 0 }),
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/32255-sessions?retryWrites=true&w=majority',
    mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
  }),
  secret: 'loqueQuier4',
  resave: false,
  saveUninitialized: false
}))

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/32255-data?retryWrites=true&w=majority', error => {
  if (error) return console.log(error)

  console.log('db is connected')
})

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

router(app)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})