require('dotenv-safe').config()
const jwt = require('jsonwebtoken')
import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'POST', 'HEAD']
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async (req, res) => {
  // res.status(200).json({
  //   headers: { ...req.headers },
  //   query: { ...req.query },
  //   body: { ...req.body }
  // })

  await runMiddleware(req, res, cors)

  if (
    req.body.email === 'helder.passos@mlins.com.br' &&
    req.body.password === 'admin123'
  ) {
    const secret = process.env.SECRET
    const id = 1
    const token = jwt.sign({ id }, secret, {
      expiresIn: 60 /// expires in 1 min
    })
    return res.status(200).json({ auth: true, token: token })
  }

  return res.status(500).json({ message: 'Login inválido' })
}
