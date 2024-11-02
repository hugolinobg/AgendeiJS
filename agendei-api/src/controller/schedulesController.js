import schedulesServices from '../services/schedulesServices.js'

async function findUser(req, res) {
  try {
    const id_user = req.id_user

    const schedules = await schedulesServices.findUser(id_user)

    return res.status(200).json(schedules)
  } catch (error) {
    return res.status(500).json({
      error: 'Something went wrong, please try again.',
      message: error,
    })
  }
}

async function create(req, res) {
  try {
    const id_user = req.id_user
    const { time } = req.body

    console.log(time)
    const schedule = await schedulesServices.create(id_user, time)

    return res.status(201).json(schedule)
  } catch (error) {
    return res.status(500).json({
      error: 'egistration failed, please try again.',
      message: error,
    })
  }
}

async function put(req, res) {
  try {
    const id_schedule = req.params.id
    const { time } = req.body

    const schedule = await schedulesServices.put(id_schedule, time)

    return res.status(200).json(schedule)
  } catch (error) {
    return res.status(500).json({
      error: 'update failed, please try again.',
      message: error,
    })
  }
}

async function deleted(req, res) {
  try {
    const id_user = req.id_user
    const id_schedule = req.params.id

    const schedule = await schedulesServices.deleted(id_user, id_schedule)

    return res.status(200).json(schedule)
  } catch (error) {
    return res.status(500).json({
      error: 'deletion failed, please try again.',
      message: error,
    })
  }
}

export default { findUser, create, put, deleted }
