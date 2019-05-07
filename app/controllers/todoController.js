var mongoose =  require('mongoose')
var Todo = mongoose.model('Todo')
const todoMethods  = require('../db/todoMethods');
const moment = require('moment');

const findList = async (ctx,next)=>{
    
    let todo;
    console.log("controller/find/ query:",ctx.request.query)
    let con = ctx.request.query;

    todo = await todoMethods.findTodo(con);
    // console.log(Object.prototype.toString.call(item.createAt)) //Object Date
    todo = JSON.parse(JSON.stringify(todo));
    // 深拷贝数组对象
    todo = todo.map((item)=>{
        item.createAt = moment(item.createAt).format("YYYY-MM-DD HH:mm:ss");
        item.updateAt = moment(item.updateAt).format("YYYY-MM-DD HH:mm:ss");
        return item;
    })
    // console.log("ctx.response",ctx.status = 500);
    ctx.body = todo;
    return next;
}


const addList = async (ctx,next)=>{
    let data = {
        title:ctx.request.body.title,
        complete:ctx.request.body.complete
    }
    console.log("controller/add data:",data)
    let todo = new Todo(data)
    try {
        let res = await todo.save()
        res = JSON.parse(JSON.stringify(res));
        // console.log("res",res);
        res.createAt = moment(res.createAt).format("YYYY-MM-DD HH:mm:ss");
        res.updateAt = moment(res.updateAt).format("YYYY-MM-DD HH:mm:ss");

        ctx.body = {
            success: true,
            data:res
        }
    } catch (error) {
        ctx.body = {
            success: false,
            data:error
        }
    }
    return next;

}
const updateList = async (ctx,next)=>{
    let todo;
    try {
        let con = ctx.request.body.con
        let doc = ctx.request.body.doc

        console.log("controller/update data:",ctx.request.body)
        todo = await todoMethods.updateTodo(con,{$set:doc})

    } catch (error) {
        todo =error;
    }
    ctx.body = todo;
    return next;
}



const delList = async (ctx,next)=>{
    let con;
    let todo;
    try {
        con = ctx.request.query;
        console.log("controller/delete data:",con);
        todo = await todoMethods.delTodo(con)
    } catch (error) {
        todo = error;
    } 

    ctx.body = todo;
    return next;
}

module.exports= {findList,addList,updateList,delList }
