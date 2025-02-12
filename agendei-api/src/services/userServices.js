import bcrypt from 'bcrypt'
import userModels from '../models/userModels.js'
import jwt from '../middlewares/auth.js'

async function login(email, password) {
  const user = await userModels.listByEmail(email)

  if (user.length == 0) {
    return []
  } else {
    if (await bcrypt.compare(password, user.password)) {
      delete user.password

      user.token = jwt.CreateToken(user.id_user)

      return user
    } else {
      return []
    }
  }
}

async function findProfile(id_user) {
  const user = await userModels.findProfile(id_user)

  return user
}

async function create(name, date_birth, cell, email, password) {
  const hashPassword = await bcrypt.hash(password, 10)

  const user = await userModels.create(
    name,
    date_birth,
    cell,
    email,
    hashPassword
  )

  user.token = jwt.CreateToken(user.id_user)

  
  return user
}

async function put(id, name, date_birth, cell, email, password) {
  const hashPassword = await bcrypt.hash(password, 10)

  const user = await userModels.put(
    id,
    name,
    date_birth,
    cell,
    email,
    hashPassword
  )

  return user
}

async function deleted(id) {
  const user = await userModels.deleted(id)

  return user
}

export default { login, findProfile, create, put, deleted }
