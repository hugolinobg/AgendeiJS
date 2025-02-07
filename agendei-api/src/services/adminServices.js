import bcrypt from 'bcrypt'
import adminModels from '../models/adminModels.js'
import jwt from '../middlewares/auth.js'

async function login(email, password) {
  const admin = await adminModels.listByEmailAdmin(email)

  if (admin.length == 0) {
    return []
  } else {
    if (await bcrypt.compare(password, admin.password)) {
      delete admin.password

      admin.token = jwt.CreateToken(admin.id_admin)

      return admin
    } else {
      return []
    }
  }
}

async function findProfile(id_admin) {
  const admin = await adminModels.findProfile(id_admin)

  return admin
}

async function findAdmin(id_admin) {
  const appointment = await adminModels.findUser(id_admin)

  return appointment
}

async function create(name, date_birth, cell, email, password) {
  const hashPassword = await bcrypt.hash(password, 10)

  const admin = await adminModels.create(
    name,
    date_birth,
    cell,
    email,
    hashPassword
  )

  admin.token = jwt.CreateToken(admin.id_admin)

  
  return admin
}

async function put(id, name, date_birth, cell, email, password) {
  const hashPassword = await bcrypt.hash(password, 10)

  const admin = await adminModels.put(
    id,
    name,
    date_birth,
    cell,
    email,
    hashPassword
  )

  return admin
}

async function deleted(id) {
  const admin = await adminModels.deleted(id)

  return admin
}

export default { login, findProfile, findAdmin, create, put, deleted }
