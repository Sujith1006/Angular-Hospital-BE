const express = require('express');
const router = express.Router();

router.use('/register', require('../Controllers/Patient/patientregister'))
router.use('/viewpatient', require('../Controllers/Patient/getpatientdata'))
router.use('/newroom', require('../Controllers/AddnewRoom/newroom'))
router.use('/addtoroom', require('../Controllers/Patient/addtoroom'))




module.exports = router