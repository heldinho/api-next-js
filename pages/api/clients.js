const { verifyJWT } = require('../../src/services')

export default (req, res) => {
  verifyJWT(req, res)
}
