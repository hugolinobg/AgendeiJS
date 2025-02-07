import { query } from '../db/db.js'

async function listByEmailAdmin(email) {
  let sql = `SELECT * FROM admins WHERE email = ?`

  const admin = await query(sql, [email])

  if (admin.length == 0) {
    return []
  } else {
    return admin[0]
  }
}

async function findProfile(id_admin) {
  let sql = `SELECT name, date_birth, cell, email FROM users WHERE id_admin = ?`

  const admin = await query(sql, [id_admin])

  return admin[0]
}

async function findAdmin(dataStart, dataEnd, id_doctor) {
  let filter = []

  let sql = `SELECT a.id_appointment, s.description as service, d.name as doctor, d.specialty, a.booking_date, a.booking_hour, u.name as user, ds.price FROM appointments a JOIN services s ON (s.id_service = a.id_service) JOIN doctors d ON (d.id_doctor = a.id_doctor) JOIN users u ON (u.id_user = a.id_user) JOIN doctors_services ds ON (ds.id_doctor = a.id_doctor and ds.id_service = a.id_service) WHERE a.id_appointment > 0 `

  if (dataStart) {
    filter.push(dataStart)
    sql = sql + `AND a.booking_date >= ? `
  }

  if (dataEnd) {
    filter.push(dataEnd)
    sql = sql + `AND a.booking_date <= ? `
  }

  if (id_doctor) {
    filter.push(id_doctor)
    sql = sql + `AND a.id_doctor = ? `
  }

  sql = sql + 'ORDER BY a.booking_date, a.booking_hour '

  const appointment = await query(sql, filter)

  return appointment
}

async function create(name, date_birth, cell, email, password) {
  let sql = `INSERT INTO admins (name, date_birth, cell, email, password) VALUES (?, ?, ?, ?, ?) 
  returning id_admin, name, date_birth, cell, email`

  const admin = await query(sql, [name, date_birth, cell, email, password])

  return admin[0]
}

async function put(id_admin, name, date_birth, cell, email, password) {
  let sql = `UPDATE admins SET name=?, date_birth=?, cell=?, email=?, password=? WHERE id_admin = ?`

  await query(sql, [name, date_birth, cell, email, password, id_admin])

  return { id_admin }
}

async function deleted(id_admin) {
  let sql = `DELETE FROM admins WHERE id_admin = ?`

  await query(sql, [id_admin])

  return { id_admin }
}

export default {
  listByEmailAdmin,
  findProfile,
  findAdmin,
  create,
  put,
  deleted,
}
