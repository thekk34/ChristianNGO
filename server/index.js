const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const cookieParser=require("cookie-parser");
require("./Config/DB");

const app=express();

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["PUT","POST","GET","DELETE"],
    credentials:true
}));



app.use(cookieParser());

dotenv.config();

const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`app is running at port ${port}`);
})