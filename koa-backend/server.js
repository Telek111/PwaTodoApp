const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const Cors = require('@koa/cors')
const BodyParser = require('koa-bodyparser')
const Helmet = require('koa-helmet')
const respond = require('koa-respond')
const mongoose = require('mongoose');

const app = new Koa()
const router = new Router()

app.use(Helmet())

app.use(Logger())


app.use(Cors())
app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422)
  }
}))

app.use(respond())

// API routes
require('./routes')(router)
app.use(router.routes())
app.use(router.allowedMethods())

app.use(require('koa-static')('./build'))


mongoose.connect('mongodb://127.0.0.1:27017/koa-test', { useNewUrlParser: true }).then((mongo) => {
  console.log('connected to mongo DB')
}).catch((err) => {
  console.log('Failed to connect to databse', { error: err })
})

module.exports = app
