const express = require('express');
const router = express.Router();

router.use('/roominfo', require('../Controllers/viewroom/viewroom'))
router.use('/allpatient',require('../Controllers/viewallpatients/viewallpatients'))
module.exports = router