const router = require('koa-router')()
const questController = require("../app/controllers/quest")

// router.prefix('/api')


router.get('/quest', questController.getQuest);
router.post('/quest', questController.addQuest);
router.delete('/quest', questController.delQuest);
router.put('/quest', questController.updateQuest);
router.delete('/allQuest', questController.delAllQuest);

// router.put('/survey', surveyController.updateSurvey)



module.exports = router