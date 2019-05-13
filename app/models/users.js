const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true)


let userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	password: {
		type: String,
		required: true,
	},
	nickname: {
		type: String,
		required: true,
	}

})

let userModel = mongoose.model('user', userSchema);
userModel.createIndexes();

const save = (data) => {
	return new userModel(data).save().then(() => {
		return true
	}).catch(() => {
		return false
	})
}

const get = async (con) => {
	return userModel.findOne(con);
}

const login = async (con) => {
	return userModel.findOne(con);
}
const updatepass = async (con, doc) => {
	return userModel.updateOne(con, doc)
}

module.exports = {
	get,
	save,
	login,
	updatepass
}