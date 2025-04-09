const jwt=require("jsonwebtoken");


const verifyAdmin=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:"invaid Admin"});
    }
    else{
        jwt.verify(token,process.env.Admin_Key,(err,decoded)=>{
            if(err){
                return res.json({message:"invalid token"});
            }
            else{
                req.email=decoded.email;
                req.role=decoded.role;
                next()
            }
        })
    }
}


module.exports=verifyAdmin;