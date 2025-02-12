import { query } from '../db/db.js'

async function listByEmail(email) {
  let sql = `SELECT * FROM users WHERE email = ?`

  const user = await query(sql, [email])

  if (user.length == 0) {
    return []
  } else {
    return user[0]
  }
}

async function findProfile(id_user) {
  let sql = `SELECT name, date_birth, cell, email FROM users WHERE id_user = ?`

  const user = await query(sql, [id_user])

  return user[0]
}

async function create(name, date_birth, cell, email, password) {
  let sql = `INSERT INTO users (name, date_birth, cell, email, password) VALUES (?, ?, ?, ?, ?) 
  returning id_user, name, date_birth, cell, email`

  const user = await query(sql, [name, date_birth, cell, email, password])

  return user[0]
}

async function put(id_user, name, date_birth, cell, email, password) {
  let sql = `UPDATE users SET name=?, date_birth=?, cell=?, email=?, password=? WHERE id_user = ?`

  await query(sql, [name, date_birth, cell, email, password, id_user])

  return { id_user }
}

async function deleted(id_user) {
  let sql = `DELETE FROM users WHERE id_user = ?`

  await query(sql, [id_user])

  return { id_user }
}

export default { listByEmail, findProfile, create, put, deleted }
