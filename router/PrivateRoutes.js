const express = require('express');
const router = express.Router();

router.use(require('./UsersRoutes.js'))

module.exports = router;
