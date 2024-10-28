import jwt from 'jsonwebtoken'

const jwtSecret = process.env.JWT_KEY

function CreateToken(id_user) {
  const token = jwt.sign({ id_user }, jwtSecret, {
    expiresIn: 9999999,
  })

  return token
}

function ValidateToken(req, res, next) {
  const authToken = req.headers.authorization
 
  if (!authToken) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authToken.split(' ')


  jwt.verify(token, jwtSecret, (err, tokenDecoded) => {
    if (err) {
       return res.status(401).json({ error: 'Token invalid' })
    }

    req.id_user = tokenDecoded.id_user

    next()
  })
}

export default { CreateToken, ValidateToken }
