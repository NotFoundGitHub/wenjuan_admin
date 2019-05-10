const answerModel = require("../models/answer")

const getAnswer = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let survey = ctx.request.query.survey;
		let data = await answerModel.getAll({
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
const addAnswer = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let {
			survey,
			answers
		} = ctx.request.body
		if (!Object.keys(answers) || !Object.keys(survey)) {
			ctx.body = {
				msg: "请输入完整",
				status: -1
			}
			return next;
		} else {

			let data = {
				survey,
				answers,
				submitTime: Date.now()
			}
			// console.log("data:", data)

			let res = await answerModel.add(data);
			if (res) {
				ctx.body = {
					msg: "提交问卷成功",
					status: 1
				}

			} else {
				ctx.body = {
					msg: "提交问卷失败",
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

const getHandleArr = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let survey = ctx.request.query.survey;
		let data = await answerModel.getAll({
			survey
		})

		let list = {
			survey: data[0].survey,
			length: data.length
		}
		data.map((one) => {
			one.answers.map(answer => {
				if (!list[answer.questIndex]) {
					list[answer.questIndex] = {};
				}
				if (!list[answer.questIndex][answer.value]) {
					list[answer.questIndex][answer.value] = 1;
				} else {
					list[answer.questIndex][answer.value] = list[answer.questIndex][answer.value] + 1
				}
			})
		})
		if (data.length) {
			ctx.body = {
				msg: "查询成功",
				status: 1,
				list
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


module.exports = {
	getAnswer,
	addAnswer,
	getHandleArr
	// getQuest,
	// addQuest,
	// delQuest,
	// delAllQuest,
	// updateQuest
}