'use strict'

const Router = require('koa-router')
const Todo = require('./app/controller/todoController')


module.exports = function(){
    const router = new Router()
    router.get('/todo',Todo.findList)
    router.post('/todo',Todo.addList)
    router.put('/todo',Todo.updateList)
    router.delete('/todo',Todo.delList)
    return router
}