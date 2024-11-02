import schedulesModels from '../models/schedulesModels.js'

async function findUser(id_user) {
  const schedules = await schedulesModels.findUser(id_user)

  return schedules
}

async function create(id_user, time) {
  console.log(time)
  const schedule = await schedulesModels.create(time)

  return schedule
}

async function put(id_schedule, time) {
  const schedule = await schedulesModels.put(id_schedule, time)

  return schedule
}

async function deleted(id_user, id_schedule) {
  const schedule = await schedulesModels.deleted(id_user, id_schedule)

  return schedule
}

export default { findUser, create, put, deleted }
