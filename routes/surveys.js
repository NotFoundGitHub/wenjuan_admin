const router = require('koa-router')()
const surveyController = require("../app/controllers/surveys")

// router.prefix('/api')


router.get('/survey', surveyController.getSurvey)
router.post('/survey', surveyController.addSurvey)
router.delete('/survey', surveyController.delSurvey)
router.put('/survey', surveyController.updateSurvey)



module.exports = router