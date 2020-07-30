var express = require('express')
var app = express.Router();
var {prisma}=require('../generated/prisma-client')
var jwt=require('jsonwebtoken')
app.post('/',async(req,res)=>{
  console.log("Income12123434",req.body)
  const newUser = await prisma.users({
  where:{username:req.body.username,
    password:req.body.password
  }
  })
  console.log(newUser[0])
  if(newUser[0]!=undefined)
  {
    let payload=newUser[0]
   let token= jwt.sign({ payload},'sujith', { expiresIn: '1h' });
  
   res.send({data:token})
  }
  else{
    res.send({data:"Not an user"})
  }
})
module.exports=app