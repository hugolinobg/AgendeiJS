import { query } from 'express'
import adminServices from '../services/adminServices.js'

async function login(req, res) {
  try {
    const { email, password } = req.body

    const admin = await adminServices.login(email, password)

    if (admin.length == 0) {
      return res.status(401).json({ error: 'Invalid email or password.' })
    } else {
      return res.status(200).json(admin)
    }
  } catch (error) {
    return res.status(500).json({
      error: 'Something went wrong, please try again.',
      message: error,
    })
  }
}

async function findProfile(req, res) {
  try {
    const id_admin = req.id_admin

    const admin = await adminServices.findProfile(id_admin)

    return res.status(200).json(admin)
  } catch (error) {
    return res.status(500).json({
      error: 'Something went wrong, please try again.',
      message: error,
    })
  }
}

async function findAdmin(req, res) {
  try {
    const dataStart = req.query.dataStart
    const dataEnd = req.query.dataEnd
    const id_doctor = req.query.id_doctor 


    const appointment = await adminServices.findUser(dataStart, dataEnd, id_doctor)

    return res.status(200).json(appointment)
  } catch (error) {
    return res.status(500).json({
      error: 'Something went wrong, please try again.',
      message: error,
    })
  }
}

async function create(req, res) {
  try {
    const { name, date_birth, cell, email, password } = req.body

    const admin = await adminServices.create(
      name,
      date_birth,
      cell,
      email,
      password
    )

    return res.status(201).json(admin)
  } catch (error) {
    return res.status(500).json({
      error: 'Registration failed, please try again.',
      message: error,
    })
  }
}

async function put(req, res) {
  try {
    const id = req.params.id
    const { name, date_birth, cell, email, password } = req.body

    const admin = await adminServices.put(
      id,
      name,
      date_birth,
      cell,
      email,
      password
    )

    return res.status(200).json(admin)
  } catch (error) {
    return res.status(500).json({
      error: 'update failed, please try again.',
      message: error,
    })
  }
}

async function deleted(req, res) {
  try {
    const id = req.params.id

    const admin = await adminServices.deleted(id)

    return res.status(200).json(admin)
  } catch (error) {
    return res.status(500).json({
      error: 'deletion failed, please try again.',
      message: error,
    })
  }
}

export default { login, findProfile, findAdmin, create, put, deleted }
