var express=require('express')
var router=express.Router()
router.use('/treat',require('../Controllers/Givetreatment/treatment'))
module.exports=router