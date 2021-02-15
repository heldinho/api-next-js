require('dotenv-safe').config()
const jwt = require('jsonwebtoken')
const cors = require('cors')
cors()

export default async (req, res) => {
  // res.status(200).json({
  //   headers: { ...req.headers },
  //   query: { ...req.query },
  //   body: { ...req.body }
  // })

  if (
    req.body.email === 'helder@hfpsis.com.br' &&
    req.body.password === '123'
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
