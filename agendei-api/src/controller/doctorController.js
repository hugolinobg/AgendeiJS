import doctorServices from '../services/doctorServices.js'

async function findAll(req, res) {
  try {
    const name = req.query.name

    const doctors = await doctorServices.findAll(name)

    return res.status(200).json(doctors)
  } catch (error) {
    return res.status(500).json({
      error: 'Something went wrong, please try again.',
      message: error,
    })
  }
}

async function listServices(req, res) {
  try {
    const id_doctor = req.params.id_doctor

    const service = await doctorServices.listServices(id_doctor)

    return res.status(200).json(service)
  } catch (error) {
    return res.status(500).json({
      error: 'Something went wrong, please try again.',
      message: error,
    })
  }
}

async function create(req, res) {
  try {
    const { name, specialty, icon } = req.body

    const doctor = await doctorServices.create(name, specialty, icon)

    return res.status(201).json(doctor)
  } catch (error) {
    return res.status(500).json({
      error: 'egistration failed, please try again.',
      message: error,
    })
  }
}

async function put(req, res) {
  try {
    const id = req.params.id
    const { name, specialty, icon } = req.body

    const doctor = await doctorServices.put(id, name, specialty, icon)

    return res.status(200).json(doctor)
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

    const doctor = await doctorServices.deleted(id)

    return res.status(200).json(doctor)
  } catch (error) {
    return res.status(500).json({
      error: 'deletion failed, please try again.',
      message: error,
    })
  }
}

export default { findAll, listServices, create, put, deleted }
