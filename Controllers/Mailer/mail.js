var nodemailer=require('nodemailer')
var {prisma}=require('../../generated/prisma-client')
var fs=require('fs')
var handlebars = require('handlebars');
class Mailer{
static async Sendmail()
  {
  var patientsinformation= await prisma.patientinfoes({})
      let transporter=nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
          user:'sujithrocks2@gmail.com',
          pass:'Sujithkumar@10'
        }
      });
    
        let data=patientsinformation.map((ele)=>{
        return (`<tr>
        <td>${ele.Patientname}</td>
        <td>${ele.PatientAddress}</td>
        <td>${ele.PatientBloodgroup}</td>
        <td>${ele.PatientGender}</td>
        <td>${ele.PatientPhonenumber}</td>
        <td>${ele.PatientSymptoms}</td>
        </tr>`
        )
        })
      let mailoptions={
        from:'sujithrocks2@gmail.com',
        to:'sujith@codingmart.com',
        subject:'Regarding all the patient Details',
        Text:"haiiii",
        html:`<html><style> table{
          width: 50%;  
          border:1px solid
        }th{
          color:red;
        }
        </style>
        <table cellpadding='15' ><th>Name</th><th>Address</th><th>BloodGroup</th>
        <th>Gender</th>
        <th>Phonenumber</th>
        <th>Symptoms</th>
        ${data}</table></html>`
        
      
      }
      transporter.sendMail(mailoptions,function(err,res)
      {
            if(err)
            console.log(err)
            else
            console.log("Email was successfully sent ")
      })
 
  }


}
module.exports=Mailer