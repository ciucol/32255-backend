const express = require('express')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
// const FileStore = require('session-file-store')
const MongoStore = require('connect-mongo')
const router = require('./router')

// const fileStorage = FileStore(session)
const app = express()

app.use(express.json())
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

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

router(app)

app.listen(3000, () => {
  console.log('listening on 3000')
})