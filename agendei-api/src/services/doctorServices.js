import doctorModels from '../models/doctorModels.js'

async function findAll() {
  const doctors = await doctorModels.findAll()

  return doctors
}

export default { findAll }
