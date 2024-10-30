import userServices from '../services/userServices.js'

async function login(req, res) {
  try {
    const { email, password } = req.body

    const user = await userServices.login(email, password)

    if (user.length == 0) {
      return res.status(401).json({ error: 'Invalid email or password.' })
    } else {
      return res.status(200).json(user)
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
    const id_user = req.id_user

    const user = await userServices.findProfile(id_user)

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({
      error: 'Something went wrong, please try again.',
      message: error,
    })
  }
}

async function create(req, res) {
  try {
    const { name, date_birth, fone, email, password } = req.body

    const user = await userServices.create(
      name,
      date_birth,
      fone,
      email,
      password
    )

    return res.status(201).json(user)
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
    const { name, date_birth, fone, email, password } = req.body

    const user = await userServices.put(
      id,
      name,
      date_birth,
      fone,
      email,
      password
    )

    return res.status(200).json(user)
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

    const user = await userServices.deleted(id)

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({
      error: 'deletion failed, please try again.',
      message: error,
    })
  }
}

export default { login, findProfile, create, put, deleted }
