const express = require('express');
const router = express.Router();
const { UsersController } = require('../controller');

// CRUD Usuario

// CREATE
router.post('/users', UsersController.create);

// GET (ALL)
router.get('/users', UsersController.find);

module.exports = router;
