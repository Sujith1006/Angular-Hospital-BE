var express=require('express')
var app=express.Router()
var {prisma}=require('../../generated/prisma-client')
app.post('/',async(req,res)=>{
  console.log("In")
  const addroom=await prisma.createRoominfo({Status:false})
  console.log(addroom)
  res.send({data:'Roomadded'})
})
module.exports=app