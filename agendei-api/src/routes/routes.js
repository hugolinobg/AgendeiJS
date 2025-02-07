import { Router } from 'express'
import adminController from '../controller/adminController.js'
import userController from '../controller/userController.js'
import doctorController from '../controller/doctorController.js'
import appointmentsController from '../controller/appointmentsController.js'
import schedulesController from '../controller/schedulesController.js'
import auth from '../middlewares/auth.js'

const router = Router()

router.get('/api/v1/status', (req, res) => {
  return res.status(200).send('Server running!!!')
})

/**admin route*/
router.post('/api/v1/admin/login', adminController.login)
router.post('/api/v1/admin/register', adminController.create)
router.put('/api/v1/admin/:id', auth.ValidateToken, adminController.put)
router.delete('/api/v1/admin/:id', auth.ValidateToken, adminController.deleted)
router.get(
  '/api/v1/admin/profile',
  auth.ValidateToken,
  adminController.findProfile
)
router.get(
  '/api/v1/admin/appointments',
  auth.ValidateToken,
  adminController.findAdmin
)

/**users route*/
router.post('/api/v1/users/login', userController.login)
router.post('/api/v1/users/register', userController.create)
router.get(
  '/api/v1/users/profile',
  auth.ValidateToken,
  userController.findProfile
)
router.put('/api/v1/users/:id', auth.ValidateToken, userController.put)
router.delete('/api/v1/users/:id', auth.ValidateToken, userController.deleted)

/**doctors route*/
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

/**appointments route*/
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

/**schedules route*/
router.get(
  '/api/v1/schedules',
  auth.ValidateToken,
  schedulesController.findUser
)
router.post('/api/v1/schedules', auth.ValidateToken, schedulesController.create)
router.put('/api/v1/schedules/:id', auth.ValidateToken, schedulesController.put)
router.delete(
  '/api/v1/schedules/:id',
  auth.ValidateToken,
  schedulesController.deleted
)

export default router
