// https://help.aliyun.com/document_detail/29456.html?spm=a2c4g.11186623.6.612.383c2649xFH0Dd
let nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
	host: "smtp.163.com",
	port: 465,
	secure: true,
	auth: {
		user: "18821710443@163.com", // user name
		pass: "liyao18821710443" // 授权码
	}
});

let mailOptions = {
	from: '"校园问卷网"<18821710443@163.com>', // sender address mailfrom must be same with the user
	// to: "1254042169@qq.com", // list of receivers
	subject: "验证码", // Subject line
};

let sendMail = function (to, text) {
	mailOptions.to = to;
	mailOptions.text = "验证码：" + text;
	let flag = true;
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) flag = false;
	});

	return flag;
};
module.exports = sendMail;