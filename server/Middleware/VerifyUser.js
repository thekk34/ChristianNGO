
const jwt =require("jsonwebtoken");

const verifyUser=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.json({message:"invalid user"});
    }
    else{
        jwt.verify(token,process.env.Admin_Key,(err,decoded)=>{
            if(err){
                jwt.verify(token,process.env.User_Key,(err,decoded)=>{
                    if(err){
                        return res.json({message:"invalid token"});
                    }
                    else{
                        req.email=decoded.email;
                        req.role=decoded.role
                        next()
                    }
                })
            }
            else{
                req.email=decoded.email;
                req.role=decoded.role
                next()
            }
        }
    )
    }
}


module.exports=verifyUser;
