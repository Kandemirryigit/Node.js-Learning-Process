const express=require("express");
const app=express();

// Middleware runs BEFORE routes
app.use((req,res,next)=>{
    console.log("Niddleware 1: Request URL =",req.url);
    next();
})

app.get("/",(req,res)=>{
    res.send("Home Page");
});

app.listen(3000);


// Every request first goes to middleware
// It logs URL
// Then next() sends it to route