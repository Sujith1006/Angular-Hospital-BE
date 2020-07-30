var express=require('express')
var app=express.Router()
var {prisma}=require('../../generated/prisma-client')
app.get('/',async(req,res)=>{
const patients=await prisma.patientinfoes({where:{Roomallocated:false}})
.$fragment('fragment name on patientinfo{id Patientname }')
// console.log(patients)
const roomdata=await prisma.roominfoes({where:{Status:false}})
res.send({patientdata:patients,roomdata:roomdata})
})
module.exports=app