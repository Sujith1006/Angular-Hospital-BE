var jwt=require('jsonwebtoken')
module.exports=function(req,res,next)
{
  console.log(req.headers.authorization)
    let token=req.headers.authorization;
    jwt.verify(token,'sujith',function(err,decoded)
    {
        if(err) res.status(401).send("Invalid auth")
        else{
            req.token=decoded
            next();

            
        }
    })

}