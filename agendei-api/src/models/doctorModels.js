import { query } from '../db/db.js'

async function findAll(name) {
  let filter = []

  let sql = 'SELECT * FROM doctors '

  if (name) {
    sql = sql + 'WHERE name LIKE ? '
    filter.push(`%${name}%`)
  }

  sql = sql + 'ORDER BY name'

  const doctors = await query(sql, filter)

  return doctors
}

async function listServices(id_doctor) {
  let sql = `SELECT d.id_service, s.description, d.price 
FROM doctors_services d 
JOIN services s ON (s.id_service = d.id_service) 
WHERE d.id_doctor = ? 
ORDER BY s.description`

  const service = await query(sql, [id_doctor])

  return service
}

async function create(name, specialty, icon) {
  let sql = `INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?) 
  returning id_doctor`

  const doctor = await query(sql, [name, specialty, icon])

  return doctor[0]
}

async function put(id_doctor, name, specialty, icon) {
  let sql = `UPDATE doctors SET name=?, specialty=?, icon=? WHERE id_doctor = ?`

  await query(sql, [name, specialty, icon, id_doctor])

  return { id_doctor }
}

async function deleted(id_doctor) {
  let sql = `DELETE FROM doctors WHERE id_doctor = ?`

  await query(sql, [id_doctor])

  return { id_doctor }
}

export default { findAll, listServices, create, put, deleted }
