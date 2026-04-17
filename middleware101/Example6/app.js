const express=require("express");
const app=express();

// ==========================================
// 1. DEFINE THE GATEKEEPER MIDDLEWARE
// ==========================================
const vipchecker=(req,res,next)=>{
    const userPassword=req.query.password;

    if(userPassword==="1234"){
        console.log("VIP member granted access");
        next();
    }
    else{
        console.log("Intruder stopped at the gate");
        res.status(401).send("Acces Denied");
    }

};



// ==========================================
// 2. DEFINE ROUTES (Applying Middleware selectively)
// ==========================================

app.get("/",(req,res)=>{
    res.send("Home Page");
});


app.get("/vip",vipchecker,(req,res)=>{
    res.send("Welcome to the vip lounge");

});




app.listen(3000);