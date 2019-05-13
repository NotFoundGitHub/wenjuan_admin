const router = require('koa-router')()
const answerController = require("../app/controllers/answer")

// router.prefix('/api')


router.get('/answer', answerController.getAnswer)
router.post('/answer', answerController.addAnswer)
router.get('/handleArr', answerController.getHandleArr)
// router.delete('/survey', surveyController.delSurvey)
// router.put('/survey', surveyController.updateSurvey)



module.exports = router