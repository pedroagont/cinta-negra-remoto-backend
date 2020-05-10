const express = require('express');
const router = express.Router();
const { UsersController } = require('../controller');

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.decoded = decoded;
    next();
  } catch (error) {
    res.status(403).send({ error })
  }
}

router.post('/users/signup', UsersController.signup);
router.post('/users/login', UsersController.login);

router.use(verifyToken);

router.post('/users', UsersController.create);
router.get('/users', UsersController.find);
router.get('/users/:id', UsersController.findById);
router.patch('/users/:id', UsersController.findByIdAndUpdate);
router.delete('/users/:id', UsersController.findByIdAndDelete);

module.exports = router;
