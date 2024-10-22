// import { request, response } from 'express'
import doctorServices from '../services/doctorServices.js'

async function findAll(req, res) {
  try {
    const doctors = await doctorServices.findAll()
    return res.status(200).json(doctors)
  } catch (error) {
    return res.status(500).json({
      error: 'Something wrong happend, try again',
      message: error,
    })
  }
}

async function create(req, res) {
  try {
    return res.status(200).send('Server running!!!')
  } catch (error) {
    return res.status(500).json({
      error: 'Registratio failed',
      message: error,
    })
  }
}

async function put(req, res) {
  try {
    return res.status(200).send('Server running!!!')
  } catch (error) {
    return res.status(500).json({
      error: 'Something wrong happend, try again',
      message: error,
    })
  }
}

async function deleted(req, res) {
  try {
    return res.status(200).send('Server running!!!')
  } catch (error) {
    return res.status(500).json({
      error: 'Something wrong happend, try again',
      message: error,
    })
  }
}

export default { findAll, create, put, deleted }
