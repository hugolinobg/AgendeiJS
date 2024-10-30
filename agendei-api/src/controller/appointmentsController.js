import appointmentsServices from '../services/appointmentsServices.js'

async function findUser(req, res) {
  try {
    const id_user = req.id_user

    const appointments = await appointmentsServices.findUser(id_user)

    return res.status(200).json(appointments)
  } catch (error) {
    return res.status(500).json({
      error: 'Something went wrong, please try again.',
      message: error,
    })
  }
}

async function create(req, res) {
  try {
    const id_user = req.id_user
    const { id_docotr, id_service, booking_date, booking_hour } = req.body

    const appointment = await appointmentsServices.create(
      id_user,
      id_docotr,
      id_service,
      booking_date,
      booking_hour
    )

    return res.status(201).json(appointment)
  } catch (error) {
    return res.status(500).json({
      error: 'egistration failed, please try again.',
      message: error,
    })
  }
}

async function put(req, res) {
  try {
    const id_user = req.id_user
    const id = req.params.id
    const { name, specialty, icon } = req.body

    const appointment = await appointmentsServices.put(
      id_user,
      id,
      name,
      specialty,
      icon
    )

    return res.status(200).json(appointment)
  } catch (error) {
    return res.status(500).json({
      error: 'update failed, please try again.',
      message: error,
    })
  }
}

async function deleted(req, res) {
  try {
    const id_user = req.id_user
    const id_appointment = req.params.id

    const appointment = await appointmentsServices.deleted(
      id_appointment,
      id_user
    )

    return res.status(200).json(appointment)
  } catch (error) {
    return res.status(500).json({
      error: 'deletion failed, please try again.',
      message: error,
    })
  }
}

export default { findUser, create, put, deleted }
