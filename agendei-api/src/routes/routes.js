import { Router } from 'express'
import doctorController from '../controller/doctorController.js'
import userController from '../controller/userController.js'
import auth from '../middlewares/auth.js'

const router = Router()

router.get('/api/v1/status', (req, res) => {
  return res.status(200).send('Server running!!!')
})

router.post('/api/v1/users/login', userController.login)
router.post('/api/v1/users/register', userController.create)
router.put('/api/v1/users/:id', auth.ValidateToken, userController.put)
router.delete('/api/v1/users/:id', auth.ValidateToken, userController.deleted)

router.get('/api/v1/doctors', auth.ValidateToken, doctorController.findAll)
router.post('/api/v1/doctors', auth.ValidateToken, doctorController.create)
router.put('/api/v1/doctors/:id', auth.ValidateToken, doctorController.put)
router.delete(
  '/api/v1/doctors/:id',
  auth.ValidateToken,
  doctorController.deleted
)

router.get(
  '/api/v1/doctors/:id/services',
  auth.ValidateToken,
  doctorController.listServices
)

export default router
