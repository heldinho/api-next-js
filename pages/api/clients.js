const { verifyJWT } = require('../../src/services')

export default (req, res) => {
  const data = verifyJWT(req, res)

  return res.json(data)
}
