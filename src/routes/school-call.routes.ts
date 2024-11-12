import Router from 'express-promise-router'
import schoolCallController from '../controllers/school-call.controller'

const router = Router()

router.post('/schoolCall', schoolCallController.createSchoolCall)
router.delete('/schoolCall/delete/:id', schoolCallController.deleteSchoolCall)
router.put('/schoolCall/update/:id', schoolCallController.updateSchoolCall)
router.get('/schoolCall/getAll', schoolCallController.getSchoolCall)

export default router
