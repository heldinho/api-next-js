const { verifyJWT } = require('../../src/services')
const cors = require('cors')
cors()

export default (req, res) => {
  verifyJWT(req, res)
}
