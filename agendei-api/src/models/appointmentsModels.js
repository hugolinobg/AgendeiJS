import { query } from '../db/db.js'

async function findUser(id_user) {
  let sql = `SELECT a.id_appointment, s.description as service, d.name as doctor, d.specialty, a.booking_date, a.booking_hour, u.name as user, ds.price FROM appointments a JOIN services s ON (s.id_service = a.id_service) JOIN doctors d ON (d.id_doctor = a.id_doctor) JOIN users u ON (u.id_user = a.id_user) JOIN doctors_services ds ON (ds.id_doctor = a.id_doctor and ds.id_service = a.id_service) WHERE a.id_user = ? ORDER BY a.booking_date, a.booking_hour`

  const appointments = await query(sql, [id_user])

  return appointments
}

async function create(
  id_doctor,
  id_service,
  id_user,
  booking_date,
  booking_hour
) {
  let sql = `INSERT INTO appointments (id_doctor, id_service, id_user, booking_date, booking_hour) VALUES (?, ?, ?, ?, ?) returning id_appointment`

  const appointment = await query(sql, [
    id_doctor,
    id_service,
    id_user,
    booking_date,
    booking_hour,
  ])

  return appointment[0]
}

async function put(id_doctor, id_service, id_user, booking_date, booking_hour) {
  let sql = `UPDATE appointments SET id_doctor=?,  id_service=?, id_user=?, booking_date=?, booking_hour=? WHERE id_appointment = ?`

  await query(sql, [id_doctor, id_service, id_user, booking_date, booking_hour])

  return { id_appointment }
}

async function deleted(id_user, id_appointment) {
  let sql = `DELETE FROM appointments WHERE id_appointment = ? AND id_user = ?`

  await query(sql, [id_appointment, id_user])

  return { id_appointment }
}

export default { findUser, create, put, deleted }
