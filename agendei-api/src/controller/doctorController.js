import { request, response } from 'express'
import doctorServices from '../services/doctorServices.js'

async function findAll(req = request, res = response) {
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

function create(req = request, res = response) {
  try {
    return res.status(200).send('Server running!!!')
  } catch (error) {
    return res.status(500).json({
      error: 'Registratio failed',
      message: error,
    })
  }
}

function put(req = request, res = response) {
  try {
    return res.status(200).send('Server running!!!')
  } catch (error) {
    return res.status(500).json({
      error: 'Something wrong happend, try again',
      message: error,
    })
  }
}

function deleted(req = request, res = response) {
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
