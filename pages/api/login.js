require('dotenv-safe').config()
const jwt = require('jsonwebtoken')

export default async (req, res) => {
  // res.status(200).json({
  //   headers: { ...req.headers },
  //   query: { ...req.query },
  //   body: { ...req.body }
  // })

  if (req.body.user === 'helder' && req.body.password === '123') {
    const secret = process.env.SECRET
    const id = 1
    const token = jwt.sign({ id }, secret, {
      expiresIn: 300 /// expires in 5 min
    })
    return res.status(200).json({ auth: true, token: token })
  }

  return res.status(500).json({ message: 'Login inválido' })
}
