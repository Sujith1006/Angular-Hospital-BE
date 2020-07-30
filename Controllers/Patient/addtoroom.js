var express=require('express')
var app=express.Router()
var {prisma}=require('../../generated/prisma-client')
app.post('/',async(req,res)=>{
  console.log(req.body)
  try{
  const assigned=await prisma.createRoomallocate(
    {
    Roomid: {
        connect: {id: req.body.data.id },
       
      },
      Personid:{
        connect:{id:req.body.patientinfo.id}
      },Patientstatus:true
    }
  )
  const status=await prisma.updateRoominfo({
    data: {
      Status:true
    },
    where: {
      id:req.body.data.id
    },
  })
  const admitted=await prisma.updatePatientinfo({
    data: {
      Roomallocated:true
    },
    where: {
      id:req.body.patientinfo.id
    },
  })
res.send({data:'Success'})
}
  // console.log(assigned,status,admitted)
 catch(err)
 {
   res.send(err)
 } 
})
module.exports=app