var express=require('express')
var router=express.Router()
router.use('/medicaltable',require('../Controllers/Medication/medi'))
module.exports=router