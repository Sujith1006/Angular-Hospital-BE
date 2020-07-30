var express=require('express')
var app=express.Router()
var {prisma}=require('../../generated/prisma-client')
app.post('/',async(req,res)=>{
console.log("treat",req.body.data)
const patientid=await prisma.roomallocates({where:{Roomid:{id:req.body.roomid}}})
.$fragment('fragment patient on roomallocates{Personid{id,Patientname}}')
// console.log(patientid[0].Personid.Patientname)
const viewmedication=await prisma.medications({where:{Patient:{id:patientid[0].Personid.id}}})
// console.log(viewmedication)
if(viewmedication[0].Medicalrounds>2||req.body.data===true)
{
  // console.log("in")
const roomstatus=await prisma.updateManyRoomallocates({
  data:{
    Patientstatus:false
  },
  where:{
    Personid:{
      id:patientid[0].Personid.id
    }
  }
})
const medicaltable=await prisma.updateManyMedications({
  data:{
    Discharge:true
  },
  where:{
    Patient:{
      id:patientid[0].Personid.id
    }
  }
})
const roomallocatesempty=await prisma.deleteManyRoomallocates({
  
  Roomid:{
    id:req.body.roomid
  
}
})

const roomepty=await prisma.deleteManyRoominfoes({
 
    id:req.body.roomid
  
})

const discharge=await prisma.updatePatientinfo({
  data:{
    Discharged:true
  },
  where:{
    id:patientid[0].Personid.id
  }
})
// console.log(medicaltable)
res.send({data:'Recovered',mediround:viewmedication[0].Medicalrounds})
}
else{
const addmedication=await prisma.updateManyMedications({
data:{
  Medicalrounds:viewmedication[0].Medicalrounds+1
},
where:{
  Patient:{
    id:patientid[0].Personid.id
  }
}
})
// console.log("med",viewmedication[0].Medicalrounds+1)
res.send({data:'Treatment',medrounds:viewmedication[0].Medicalrounds+1})
}
})
module.exports=app