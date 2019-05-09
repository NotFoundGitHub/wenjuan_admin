const questModel = require("../models/quest")

const getQuest = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let survey = ctx.request.query.survey;
		let data = await questModel.getAll({
			survey
		})
		if (data.length) {
			ctx.body = {
				msg: "查询成功",
				status: 1,
				data
			}
		} else {
			ctx.body = {
				msg: "无数据",
				status: -1
			}

		}

	} else {
		ctx.body = {
			msg: "未登录",
			status: 0
		}
	}
	return next;
}
const addQuest = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let {
			survey,
			name,
			type,
			label,
			value,
			kind,
			children,
		} = ctx.request.body
		if (!label || !survey || !name || !type) {
			ctx.body = {
				msg: "请输入完整",
				status: -1
			}
			return next;
		} else {
			let questIndex = (await questModel.getAll({
				survey
			})).length + 1
			console.log("questIndex:", questIndex)
			let data = {
				survey,
				name,
				type,
				label,
				questIndex,
				value,
				kind,
				children
			}
			// console.log("data:", data)

			let res = await questModel.add(data);
			if (res) {
				ctx.body = {
					msg: "增加题目成功",
					status: 1
				}

			} else {
				ctx.body = {
					msg: "增加题目失败",
					status: -2
				}
			}
		}

	} else {
		ctx.body = {
			msg: "未登录",
			status: 0
		}
	}
	return next;
}
const delQuest = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let _id = ctx.request.query._id;
		// let survey = ctx.request.query.survey;

		let res = await questModel.del({
			_id
		})
		console.log("res:", res)
		if (res.deletedCount) {
			ctx.body = {
				msg: "删除成功",
				status: 1,
			}
		} else {
			ctx.body = {
				msg: "空数据,删除失败",
				status: -1
			}

		}

	} else {
		ctx.body = {
			msg: "未登录",
			status: 0
		}
	}
	return next;
}
const delAllQuest = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let survey = ctx.request.query.survey;
		// let survey = ctx.request.query.survey;

		let deletedCount = (await questModel.delAll({
			survey: survey
		})).deletedCount;
		console.log("deletedCount:", deletedCount)
		if (deletedCount) {
			ctx.body = {
				msg: "删除成功",
				status: 1,
				data: {
					deletedCount,
				}
			}
		} else {
			ctx.body = {
				msg: "空数据,删除失败",
				status: -1
			}

		}

	} else {
		ctx.body = {
			msg: "未登录",
			status: 0
		}
	}
	return next;

}


// 含有children慎用update
const updateQuest = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let {
			_id,
			doc
		} = ctx.request.body
		let res = await questModel.update({
			_id
		}, {
			"$set": doc
		})
		if (res) {
			ctx.body = {
				msg: "更新成功",
				status: 1,
			}
		} else {
			ctx.body = {
				msg: "更新失败",
				status: -1
			}
		}

	} else {
		ctx.body = {
			msg: "未登录",
			status: 0
		}
	}
	return next;
}


module.exports = {
	getQuest,
	addQuest,
	delQuest,
	delAllQuest,
	updateQuest
}