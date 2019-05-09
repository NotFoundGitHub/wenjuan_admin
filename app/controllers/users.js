const userModel = require("../models/users")
const sendMail = require("../../util/sendMail")

const login = async (ctx, next) => {
	let {
		username,
		password
	} = ctx.request.body;

	let result = await userModel.login({
		username,
		password
	})
	if (result) {
		ctx.session.username = username;
		ctx.body = {
			msg: "登录成功",
			status: 1,
		}
	} else {
		ctx.body = {
			msg: "密码错误或者账号不存在",
			status: 0,
		}
	}

	return next;
}

const logout = async (ctx, next) => {
	let username = ctx.request.query.username;
	// console.log("username", username)
	// console.log("username", ctx.session.username)
	if (ctx.session.username === username) {
		ctx.session.username = null;
		ctx.body = {
			status: 1,
			msg: '退出成功'
		}
	} else {
		ctx.body = {
			status: 0,
			msg: '退出失败'
		}
	}
	return next;
}

const regist = async (ctx, next) => {
	let {
		username,
		password,
		nickname,
		vericode
	} = ctx.request.body;
	if (vericode === ctx.session.vericode && username === ctx.session.username) {

		if (!nickname) nickname = "用户" + Math.random().toString(36).substr(2, 6);

		let result = await userModel.save({
			username,
			password,
			nickname
		})
		if (result) {
			ctx.body = {
				msg: '注册成功',
				status: 0
			}
		} else {
			ctx.session.username = null;
			ctx.body = {
				msg: '注册失败',
				status: -1
			}
		}

	} else {
		ctx.session.username = null;
		ctx.body = {
			msg: '验证码错误',
			status: 0
		}
	}
	ctx.session.vericode = null;
	return next;
}

const modifyPassword = async (ctx, next) => {
	let {
		username,
		password,
		vericode
	} = ctx.request.body;

	if (vericode === ctx.session.vericode && username === ctx.session.username) {
		let result = await userModel.updatepass({
			username
		}, {
			$set: {
				password
			}
		});
		if (result) {
			ctx.body = {
				msg: '更新密码成功',
				status: 0
			}
		} else {
			ctx.session.username = null;
			ctx.body = {
				msg: '更新密码失败',
				status: -1
			}
		}

	} else {
		ctx.session.username = null;
		ctx.body = {
			msg: '验证码错误',
			status: 0
		}
	}
	ctx.session.vericode = null;
	return next;

}

const verify = async (ctx, next) => {
	const {
		username
	} = ctx.request.body
	let vericode = Math.random().toString(36).substr(2, 6);
	let flag = await sendMail(username, vericode);

	if (flag) {
		ctx.session.vericode = vericode;
		ctx.session.username = username;
		ctx.body = {
			msg: '发送成功到' + username,
			status: 1
		}
	} else {
		ctx.body = {
			msg: '发送失败，请检查',
			status: 0
		};
	}
	return next;
}


module.exports = {
	login,
	logout,
	verify,
	regist,
	modifyPassword
}