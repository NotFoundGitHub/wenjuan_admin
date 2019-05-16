const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true)
let ObjectId = mongoose.Schema.Types.ObjectId;
let Mixed = mongoose.Schema.Types.Mixed;

let questSchema = new mongoose.Schema({
	survey: {
		type: ObjectId,
		ref: 'survey',
		required: true
	},
	questIndex: {
		type: Number,
		required: true
	},
	required: {
		type: Boolean,
		default: false
	},
	type: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	value: {
		type: Mixed,
	},
	kind: String,
	children: Mixed,
})

let questModel = mongoose.model('quest', questSchema);
questModel.createIndexes();

const add = (data) => {
	return new questModel(data).save().then(() => {
		return true
	}).catch(() => {
		return false
	})
}

const get = async (con) => {
	return questModel.findOne(con);
}
const getAll = async (con) => {
	return questModel.find(con);
}

const update = async (con, doc) => {
	return questModel.updateOne(con, doc);
}

const del = async (con) => {
	return questModel.deleteOne(con);
}
const delAll = async (con) => {
	return questModel.deleteMany(con);
}

module.exports = {
	add,
	get,
	update,
	del,
	getAll,
	delAll,
}