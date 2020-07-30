var express=require('express')
var app=express.Router()
var {prisma}=require('../../generated/prisma-client')
app.get('/',async(req,res)=>{
  const patients=await prisma.patientinfoes({})
  
  // console.log(patients)
  res.send(patients)
})
module.exports=app