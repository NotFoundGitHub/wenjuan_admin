const mongoose = require('mongoose')

let mongo = {
	url: 'mongodb://127.0.0.1:27017/wenjuan',
	connect() {
		mongoose.connect(this.url, {
			useNewUrlParser: true
		}, (err) => {
			if (err) {
				console.log("数据库连接失败！" + err)
				return;
			}
			console.log("数据库连接成功！")
		})
	}
}
const sessionConfig = {
	key: 'koa:sess',
	//   key: 'koa:sess',
	maxAge: 3600000,
	autoCommit: true,
	/** (boolean) automatically commit headers (default true) */
	overwrite: true,
	/** (boolean) can overwrite or not (default true) */
	httpOnly: true,
	/** (boolean) httpOnly or not (default true) */
	signed: true,
	/** (boolean) signed or not (default true) */
	rolling: false,
	/** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
	renew: false,
	/** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
module.exports = {
	mongo,
	sessionConfig
};