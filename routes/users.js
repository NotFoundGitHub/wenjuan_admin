const router = require('koa-router')()
const usersController = require("../app/controllers/users")

router.prefix('/api/user')


router.post('/login', usersController.login)
router.post('/verify', usersController.verify)
router.post('/regist', usersController.regist)
router.post('/modifyPassword', usersController.modifyPassword)


module.exports = router