require('dotenv-safe').config()
const jwt = require('jsonwebtoken')

export function verifyJWT(req, res) {
  const secret = process.env.SECRET
  const token = req.headers['x-access-token']

  if (!token)
    return res.status(401).json({ auth: false, message: 'No token provided' })

  jwt.verify(token, secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: 'Failed to authenticate token', err })

    return res.status(200).json({ auth: true, ...decoded })
  })
}
