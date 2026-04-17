const express=require("express");
const app=express();

app.use((req,res,next)=>{
    console.log("middleware 1");
    next();  // go to next middleware
});


app.use((req,res,next)=>{
    console.log("middleware 2");
    next();  // go to route
});


app.get("/",(req,res)=>{
    console.log("Route handler");
    res.send("Hello From Home Page");
});


app.listen(3000);