import appointmentsModels from '../models/appointmentsModels.js'

async function findUser(id_user) {
  const appointments = await appointmentsModels.findUser(id_user)

  return appointments
}

async function create(
  id_user,
  id_docotr,
  id_service,
  booking_date,
  booking_hour
) {
  const appointment = await appointmentsModels.create(
    id_user,
    id_docotr,
    id_service,
    booking_date,
    booking_hour
  )

  return appointment
}

async function put(id_user, id_docotr, id_service, booking_date, booking_hour) {
  const appointment = await appointmentsModels.put(
    id_user,
    id_docotr,
    id_service,
    booking_date,
    booking_hour
  )

  return appointment
}

async function deleted(id_user, id_appointment) {
  const appointment = await appointmentsModels.deleted(id_user, id_appointment)

  return appointment
}

export default { findUser, create, put, deleted }
