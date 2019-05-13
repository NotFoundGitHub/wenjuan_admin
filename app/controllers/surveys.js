const surveyModel = require("../models/surveys")
const questModel = require("../models/quest")

const getSurvey = async (ctx, next) => {
	let username = ctx.session.username;
	let _id = ctx.request.query._id;
	// console.log(_id)
	if (username) {
		if (_id) {
			let data = await surveyModel.get({
				username,
				_id
			})
			console.log(data)
			if (Object.keys(data).length) {
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
			let data = await surveyModel.getAll({
				username
				// username: "141790259@qq.com"
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
		}

	} else {
		ctx.body = {
			msg: "未登录",
			status: 0
		}
	}
	return next;
}
const addSurvey = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let {
			title,
			createAt,
			endTime,
			isPublished
		} = ctx.request.body
		if (!title) {
			ctx.body = {
				msg: "请输入标题",
				status: -1
			}
			return next;
		} else {
			let data = {
				username,
				title,
				createAt: createAt ? createAt : Date.now(),
				endTime: endTime ? endTime : Date.now() + 24 * 3600 * 1000,
				isPublished
			}
			console.log("data:", data)
			let res = await surveyModel.add(data);
			if (res) {
				ctx.body = {
					msg: "增加问卷成功",
					status: 1
				}

			} else {
				ctx.body = {
					msg: "增加问卷失败",
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
const delSurvey = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let _id = ctx.request.query._id;

		let delQuestRes = await delAllQuest({
			survey: _id
		})
		let delSurRes = (await surveyModel.del({
			_id
		})).deletedCount
		console.log("res:", delQuestRes, delSurRes)
		if (delSurRes || delQuestRes) {
			ctx.body = {
				msg: "删除成功",
				status: 1,
				data: {
					surveyCount: delSurRes,
					questCount: delQuestRes
				}
			}
		} else {
			ctx.body = {
				msg: "空数据，删除失败",
				status: -1,
				data: {
					surveyCount: delSurRes,
					questCount: delQuestRes
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
const delAllQuest = async (con) => {
	return (await questModel.delAll(con)).deletedCount;
}

const updateSurvey = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let {
			_id,
			doc
		} = ctx.request.body
		if (doc.username) {
			ctx.body = {
				msg: "用户名不能修改",
				status: -2
			}
			return next;
		}
		let res = await surveyModel.update({
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
	getSurvey,
	addSurvey,
	delSurvey,
	updateSurvey
}