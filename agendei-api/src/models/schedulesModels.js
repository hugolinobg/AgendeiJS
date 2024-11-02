import { query } from '../db/db.js'

async function findUser(id_user) {
  let sql = `SELECT id_schedule, time FROM schedules ORDER BY time`

  const schedules = await query(sql, [])

  return schedules
}

async function create(time) {
  let sql = `INSERT INTO schedules (time) VALUES (?) returning id_schedule`

  const schedule = await query(sql, [time])

  return schedule[0]
}

async function put(id_schedule, time) {
  let sql = `UPDATE schedules SET time=? WHERE id_schedule = ?`

  await query(sql, [time, id_schedule])

  return { id_schedule }
}

async function deleted(id_schedule) {
  let sql = `DELETE FROM schedules WHERE id_schedule = ?`

  await query(sql, [id_schedule])

  return { id_schedule }
}

export default { findUser, create, put, deleted }
