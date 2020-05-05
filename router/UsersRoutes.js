const express = require('express');
const router = express.Router();
const { UsersController } = require('../controller');

// CRUD Usuario

// CREATE
router.post('/users', UsersController.create);

// GET (ALL)
router.get('/users', UsersController.find);

// GET (ONE)
router.get('/users/:id', UsersController.findById);

// PATCH
router.patch('/users/:id', UsersController.findByIdAndUpdate);

module.exports = router;
