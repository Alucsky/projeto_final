import Router from 'express-promise-router' // 
import noteController from '../controllers/notes.controller'

const router = Router()

router.get('/note/get/:studentId/:activityId', noteController.getNote)
router.get('/note/average/:studentId/:activityId', noteController.getAverage)

export default router
