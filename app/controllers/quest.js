const questModel = require("../models/quest")

const getQuest = async (ctx, next) => {

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
	return next;
}

const addQuest = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		// console.log(ctx.request.body)
		ctx.body = {
			msg: "保存题目成功",
			status: 1,
			data: ctx.request.body
		}

		let data = ctx.request.body.data;
		let survey = ctx.request.body.survey;
		let count = 0;

		let deletedCount = (await questModel.delAll({
			survey: survey
		})).deletedCount;

		for (const index in data) {
			let item = data[index];
			item.survey = survey;
			if (!item.title || !item.survey || !item.type) {
				ctx.body = {
					msg: `第${+index+1}题请输入完整`,
					status: -1
				}
				return next;
			}

			let res = await questModel.add(item);
			count = count + res;
		}

		if (count) {
			ctx.body = {
				msg: `增加${count}条题目成功`,
				status: 1
			}

		} else {
			ctx.body = {
				msg: "增加题目失败",
				status: -2
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