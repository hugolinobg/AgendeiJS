import { Router } from 'express'
import doctorController from '../controller/doctorController.js'
import userController from '../controller/userController.js'
import appointmentsController from '../controller/appointmentsController.js'
import auth from '../middlewares/auth.js'

const router = Router()

router.get('/api/v1/status', (req, res) => {
  return res.status(200).send('Server running!!!')
})

router.post('/api/v1/users/login', userController.login)
router.post('/api/v1/users/register', userController.create)
router.get(
  '/api/v1/users/profile',
  auth.ValidateToken,
  userController.findProfile
)
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

router.get(
  '/api/v1/appointments',
  auth.ValidateToken,
  appointmentsController.findUser
)
router.post(
  '/api/v1/appointments',
  auth.ValidateToken,
  appointmentsController.create
)
router.delete(
  '/api/v1/appointments/:id',
  auth.ValidateToken,
  appointmentsController.deleted
)

export default router
