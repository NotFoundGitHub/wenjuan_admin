'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;
// {"title":"喝水","order":2,"completed":false,"id":"063d4511-09cc-0bfe-256c-ba977f53738d"}
var TodoSchema = new Schema({
    title:String,
    complete:Boolean,
    createAt: {
        type: Date,
        dafault: Date.now()
    },
    updateAt: {
        type: Date,
        dafault: Date.now()
    }},
    // 配置自动更新时间的参数 详参 https://mongoosejs.com/docs/guide.html#timestamps
    {timestamps: 
        { 
          createdAt: 'createAt',
          updatedAt: 'updateAt' 
        } 
    });


// TodoSchema.pre('save', function(next) {
//   console.log("pre save .......")
//   if (this.isNew) {
//     this.createAt = this.updateAt = Date.now()
//   }
//   else {
//     this.updateAt = Date.now();
//   }
//   next()
// })


var Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo

/**
 * nodejs中文社区对mongoose的用法https://cnodejs.org/topic/548e54d157fd3ae46b233502
 */