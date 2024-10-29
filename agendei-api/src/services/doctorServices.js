import doctorModels from '../models/doctorModels.js'

async function findAll(name) {
  const doctors = await doctorModels.findAll(name)

  return doctors
}

async function listServices(id_doctor) {
  const service = await doctorModels.listServices(id_doctor)

  return service
}

async function create(name, specialty, icon) {
  const doctor = await doctorModels.create(name, specialty, icon)

  return doctor
}

async function put(id, name, specialty, icon) {
  const doctor = await doctorModels.put(id, name, specialty, icon)

  return doctor
}

async function deleted(id) {
  const doctor = await doctorModels.deleted(id)

  return doctor
}

export default { findAll, listServices, create, put, deleted }
