const express = require('express');
const router = express.Router();

router.use('/login', require('../Controllers/login'))


module.exports = router