import { query } from '../db/db.js'

async function findAll() {
  let sql = `select * from doctors order by name`

  const doctors = await query(sql, [])

  return doctors
}

export default { findAll }
