var express = require("express");
var app = express.Router();
var { prisma } = require("../../generated/prisma-client");
var verify = require("../../Middleware/middleverify");
// var pdf = require("html-pdf");
const pdftemplate = require("../../Documents");
app.post("/", async (req, res) => {
  // console.log(req.body)
  const rooms=await prisma.roominfoes({where:{Status:false}})
  // console.log(rooms[0])
  const waitinglistpatients=await prisma.patientinfoes({where:{
    Roomallocated:false
  }})
  console.log(waitinglistpatients.length)
  if(waitinglistpatients.length>=2)
  {
      res.send({data:'Need Room For patients'})
  }
  else{
if(rooms[0]===undefined)
{
  try {
    const newpatient = await prisma.createPatientinfo({
      Patientname: req.body.details.name,
      PatientAddress: req.body.details.address,
      PatientGender: req.body.details.gender,
      PatientPhonenumber: req.body.details.phonenumber,
      PatientBloodgroup: req.body.details.bloodgroup,
      PatientSymptoms: req.body.details.symptoms,
      Roomallocated: false,
      Discharged: false
    });
    // pdf.create(pdftemplate(req.body), {}).toFile("data.pdf", err => {
    //   if (err) {
    //     console.log(err);
    //   } else {
         
               res.send({res: "Inserted Successfully" ,room:'Not allocated'});
    //   }
    // });
              // app.get("/pdf", (req, res) => {
              //   res.sendFile("/home/sujith/Hospital/Backend/data.pdf");
              // });
  } catch (err) {
    console.log(err);
    res.send({ res: "Error" });
  }
  }

  else{
    try {
      const newpatient = await prisma.createPatientinfo({
        Patientname: req.body.details.name,
        PatientAddress: req.body.details.address,
        PatientGender: req.body.details.gender,
        PatientPhonenumber: req.body.details.phonenumber,
        PatientBloodgroup: req.body.details.bloodgroup,
        PatientSymptoms: req.body.details.symptoms,
        Roomallocated: true,
        Discharged: false
      });
      console.log(newpatient,rooms[0].id)
      const roomallocate=await prisma.createRoomallocate({
        Roomid:{
          connect:
          {
            id:rooms[0].id
          }
        },
        Personid:{
          connect:{
           id: newpatient.id
          }
        },
        Patientstatus:true
      })
      const updateroom=await prisma.updateRoominfo({
     data:{   Status:true,  },
          where:{
              id:rooms[0].id
          }
      })
      const addmedicalrounds=await prisma.createMedication({
        Patient:{
          connect:{
            id:newpatient.id
          }
        },Medicalrounds:0,Discharge:false
      })
      // pdf.create(pdftemplate(req.body), {}).toFile("data.pdf", err => {
      //   if (err) {
      //     console.log(err);
      //   } else {
           
                 res.send({res: "Inserted Successfully" ,room:'allocated'});
      //   }
      // });
      //           app.get("/pdf", (req, res) => {
      //             res.sendFile("/home/sujith/Hospital/Backend/data.pdf");
      //           });
    } catch (err) {
      console.log(err);
      res.send({ res: "Error" });
  }

}
}
});
// "html-pdf": "^2.2.0",
module.exports = app;
