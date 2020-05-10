const express = require('express');
const router = express.Router();
const { UsersController } = require('../controller');

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.decoded = decoded;
    next();
  } catch (err) {
    res.status(403).send({ message: ' Error with token', err })
  }
}


// CRUD Usuario

// CREATE
router.post('/users', UsersController.create);

// GET (ALL)
router.get('/users', verifyToken, UsersController.find);

// GET (ONE)
router.get('/users/:id', UsersController.findById);

// PATCH
router.patch('/users/:id', UsersController.findByIdAndUpdate);

// DELETE
router.delete('/users/:id', UsersController.findByIdAndDelete);

// SIGNUP
router.post('/users/signup', UsersController.signup)

// LOGIN
router.post('/users/login', UsersController.login)

module.exports = router;
