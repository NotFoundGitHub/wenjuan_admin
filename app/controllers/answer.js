const answerModel = require("../models/answer")
const questModel = require("../models/quest")


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

	return next;
}

const getHandleAnswer = async (ctx, next) => {
	// let username = ctx.session.username;
	// 判断登录
	// if (username) {
	let survey = ctx.request.query._id;

	let questList = await questModel.getAll({
		survey
	})

	let answerList = await answerModel.getAll({
		survey
	})
	let questArr = [];
	questList.map((item) => {
		questArr.push({
			type: item.type,
			title: item.title,
			children: item.children,
			questIndex: item.questIndex
		})
	})
	questArr.sort((a, b) => {
		return a.questIndex > b.questIndex;
	})

	let answerArr = []
	answerList.map((item) => {
		item.answers.map(answer => {
			answerArr.push(answer)
		})
	})

	answerArr.sort((a, b) => {
		return a.questIndex - b.questIndex;
	})

	let ansTemp = [];

	answerArr.map((item) => {
		if (!ansTemp[+(item.questIndex)]) {
			ansTemp[+(item.questIndex)] = [];
		}

		ansTemp[+(item.questIndex)].push(item)
	})
	answerArr = ansTemp;

	let list = [];
	answerArr.map(quest => {
		let obj = {};
		quest.map(item => {
			if (!obj[item.value]) {
				obj[item.value] = 1;
			} else {
				obj[item.value] = obj[item.value] + 1;
			}
		})
		list.push(obj)
	})

	let rowList = [];

	for (let i = 0; i < list.length; i++) {
		let row = [];
		let quest = questArr[i];
		let answer = list[i]
		// 处理多选问题
		if (quest.type == 'CheckboxGroup') {
			for (let key in answer) {
				if (key.includes(',')) {
					let keys = key.split(',')
					keys.map(it => {
						if (!answer[it]) {
							answer[it] = 1
						} else {
							answer[it] = answer[it] + 1;
						}
					})
					delete answer[key];
				}
			}
		}

		for (let key in answer) {
			if (key == '') {
				row.push({
					'选项': '空选',
					'人数': answer[key]
				})
			} else {

				quest.children.list.some(op => {
					if (op.value == key || op.label == key) {
						row.push({
							'选项': op.title,
							'人数': answer[key]
						})
						return false;
					}
				})
			}
		}
		rowList.push({
			quest: quest.title,
			row
		})
	}


	ctx.body = {
		// questArr,
		// answerArr
		list,
		rowList

	}

	return next;

}


const getHandleArr = async (ctx, next) => {
	let username = ctx.session.username;
	if (username) {
		let survey = ctx.request.query.survey;

		let questList = await questModel.getAll({
			survey
		})

		let answerList = await answerModel.getAll({
			survey
		})


		if (questList.length || answerList.length) {
			ctx.body = {
				msg: "查询成功",
				status: 1,
				list: {
					questList,
					answerList
				}
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
	getHandleArr,
	getHandleAnswer

}