// 'use strict'
// const Todo = require("./app/models/todoModels");
const Koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const path = require('path') //路径管理
const static = require('koa-static') //静态资源服务插件
// const router = require('./router')()

const {
	mongo,
	sessionConfig
} = require("./util/config")

const app = new Koa()

mongo.connect();



app.keys = ['@#(*#JO@#@_)#(%*($#A'];
// app.keys = ['some secret hurr'];
app.use(session(sessionConfig, app));
app.use(static(path.join(__dirname, './static')));
app.use(logger())
app.use(bodyParser())

// 路由配置
const index = require('./routes/index')
const users = require('./routes/users')
const surveys = require('./routes/surveys')
const quest = require('./routes/quest')
const answer = require('./routes/answer')

app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(surveys.routes(), surveys.allowedMethods())
app.use(quest.routes(), quest.allowedMethods())
app.use(answer.routes(), answer.allowedMethods())


// app
// 	.use(router.routes())
// 	.use(router.allowedMethods());



app.listen(12345)
console.log('please open http://localhost:12345/');