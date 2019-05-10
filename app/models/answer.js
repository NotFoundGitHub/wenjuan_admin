const mongoose = require("mongoose");


// mongoose 格式
let ObjectId = mongoose.Schema.Types.ObjectId;
let Mixed = mongoose.Schema.Types.Mixed;

let answerSchema = new mongoose.Schema({
	survey: {
		type: ObjectId,
		ref: 'survey',
		required: true
	},
	submitTime: {
		type: Date,
		required: true
	},
	answers: [{
		questIndex: {
			type: Number,
			required: true
		},
		_id: {
			type: ObjectId,
			ref: 'quest',
			required: true
		},
		value: {
			type: Mixed,
			required: true
		}
	}]

})

let answerModel = mongoose.model('answer', answerSchema);


const add = (data) => {
	return new answerModel(data).save().then(() => {
		return true
	}).catch(() => {
		return false
	})
}

const get = async (con) => {
	return answerModel.findOne(con);
}
const getAll = async (con) => {
	return answerModel.find(con);
}

const update = async (con, doc) => {
	return answerModel.updateOne(con, doc);
}

const del = async (con) => {
	return answerModel.deleteOne(con);
}
const delAll = async (con) => {
	return answerModel.deleteMany(con);
}

module.exports = {
	add,
	get,
	update,
	del,
	getAll,
	delAll,
}