import Router from 'express-promise-router'
import turmasController from '../controllers/classes.controller'

const router = Router()

router.post('/classes', turmasController.createTurma)
router.put('/classes', turmasController.updateTurma)
router.delete('/classes', turmasController.deleteTurma)

export default router
