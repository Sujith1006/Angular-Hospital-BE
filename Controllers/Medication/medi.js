var express=require('express')
var app=express.Router()
var {prisma}=require('../../generated/prisma-client')
app.post('/',async(req,res)=>{
  console.log(req.body)
  var medicalfieldadd=await prisma.createMedication({
    Medicalrounds:0,
    Patient:{
      connect:{id:req.body.patientinfo.id}
    },
    Discharge:false
  })
  // console.log(medicalfieldadd)
})
module.exports=app