const express = require('express');
const router = express.Router();

router.use(require('./AuthRoutes.js'))

module.exports = router;
