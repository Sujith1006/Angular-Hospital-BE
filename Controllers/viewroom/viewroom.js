var express=require('express')
var app=express.Router()
var {prisma}=require('../../generated/prisma-client')
app.get('/',async(req,res)=>{
  const roomavailable=await prisma.roominfoes()
const roomallocates=await prisma.roomallocates({})
.$fragment('fragment addres on roominfo{ id Personid{id Patientname }Roomid{id Status}Patientstatus,createdAt}')

// console.log(roomavailable)
res.send({data:roomavailable,roomallocated:roomallocates})

})
module.exports=app