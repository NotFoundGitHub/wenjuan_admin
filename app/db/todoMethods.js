'use strict'

var mongoose =  require('mongoose')
var Todo = mongoose.model('Todo')

// 查找todo
exports.findTodo = async (con) => {
	console.log("methods/find todos")
	// await Todo.find(con,(err,data)=>{
	// 	// console.log(2)
	// 	if(err){
	// 		console.log("err")
	// 		res = {err};
	// 	}else{
	// 		res = data;
	// 	}
	// });
	let query = Todo.find(con);
	let res = []
	await new Promise( resolve => query.exec(function(err, data) {
		if(err) {
			res = []
		}else {
			res = data;
		}
		resolve();
	}))
	return res;
}


// 增加todo
exports.addTodo = async (todo) => {
	console.log("methods/add todos")
	todo = await todo.save()
	return todo;
}

// 更新todo

exports.updateTodo = async (con,doc) => {
	console.log("methods/update todo")
	let query = Todo.update(con,doc,{multi:true});
	let res = []
	await new Promise( resolve => query.exec(function(err, data) {
		if(err) {
			res = [] 
		}else {
			res = data;
		}
		resolve();
	}))
	// console.log(res)
	return res;
}

// 删除todo

exports.delTodo = async (con,doc) => {
	console.log("methods/del todo")
	let query = Todo.remove(con);
	let res = []
	await new Promise( resolve => query.exec(function(err, data) {
		if(err) {
			res = []
		}else {
			res = data;
		}
		resolve();
	}))
	// console.log(res)
	return res;
}