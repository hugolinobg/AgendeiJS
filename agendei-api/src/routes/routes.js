import { Router } from 'express'
import doctorController from '../controller/doctorController.js'

const router = Router()

router.get('/api/v1/', (req, res) => {
  return res.status(200).send('Server running!!!')
})

router.get('/api/v1/doctors', doctorController.findAll)
router.post('/api/v1/doctors', doctorController.create)
router.put('/api/v1/doctors/:id', doctorController.put)
router.delete('/api/v1/doctors/:id', doctorController.deleted)

export default router
