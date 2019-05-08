const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true)


let surveySchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	createAt: {
		type: Date,
		required: true
	},
	endTime: {
		type: Date,
		required: true
	},
	isPublished: {
		type: Boolean,
		default: false
	}
})

let surveyModel = mongoose.model('survey', surveySchema);
surveyModel.createIndexes();

const add = (data) => {
	return new surveyModel(data).save().then(() => {
		return true
	}).catch(() => {
		return false
	})
}

const get = async (con) => {
	return surveyModel.findOne(con);
}
const getAll = async (con) => {
	return surveyModel.find(con);
}

const update = async (con, doc) => {
	return surveyModel.updateOne(con, doc);
}

const del = async (con) => {
	return surveyModel.deleteOne(con);
}

module.exports = {
	add,
	get,
	update,
	del,
	getAll
}