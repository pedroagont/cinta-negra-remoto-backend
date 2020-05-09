const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  createToken: (payload) => {
    return jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: payload
    }, JWT_SECRET);
  },
}
