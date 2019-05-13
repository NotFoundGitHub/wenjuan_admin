// https://help.aliyun.com/document_detail/29456.html?spm=a2c4g.11186623.6.612.383c2649xFH0Dd

const netease = {
	host: "smtp.163.com",
	port: 465,
	user: "18821710443@163.com",
	pass: "liyao18821710443"

}
const sina = {
	host: 'smtp.sina.cn',
	port: 465,
	user: "gitcat@sina.cn",
	pass: '3.1415926',

}
const sohu = {
	host: 'smtp.sohu.com',
	port: 465,
	user: '13028462586@sohu.com',
	pass: "z3.1415926"

}
const aliyun = {
	host: 'smtp.aliyun.com',
	port: 465,
	user: 'gitcat@aliyun.com',
	pass: "zhao1254042169"

}
const company = [
	// ...netease
	sina,
	sohu,
	aliyun
]

// 随机产生邮件，避免被拉黑
const conf = company[Math.round(Math.random() * 2)];

// 邮件附件字符，避免邮箱划为垃圾邮件
const time = new Date().toLocaleTimeString()
const randStr = Math.random().toString(36).substr(2, 4)


const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
	host: conf.host,
	port: conf.port,
	secure: true,
	auth: {
		user: conf.user,
		pass: conf.pass // 授权码
	},
});

let mailOptions = {
	from: `校园问卷网站(${randStr})<${conf.user}>`,
	subject: `最新验证码-${time}`,
};

// 发送邮件方法封装
let send = (mailOptions) => {
	return new Promise((res, rej) => {
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log("error:", error)
				res(false)
			} else {
				console.log(conf.host + "已经发出")
				res(true)
			}
		});
	})
}

let sendMail = async (to, text) => {
	mailOptions.to = to;
	mailOptions.text =
		`
		验证码： ${text}
		当前时间：${time}
	`
	return await send(mailOptions);
	// return flag;
};
module.exports = sendMail;