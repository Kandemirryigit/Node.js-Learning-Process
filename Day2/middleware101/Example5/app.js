const express=require("express");
const app=express();


// ==========================================
// 1. DEFINE THE MIDDLEWARE FUNCTION
// ==========================================

const requestTimeLogger=(req,res,next)=>{
    const currentTime=new Date().toLocaleDateString();
    req.requestTime=currentTime;

    console.log(`[${currentTime}] Request received for: ${req.url}`);

    next();
};


// ==========================================
// 2. TELL EXPRESS TO USE THE MIDDLEWARE
// ==========================================
app.use(requestTimeLogger);



// ==========================================
// 3. DEFINE OUR ROUTES
// ==========================================

app.get("/",(req,res)=>{
    res.send(`Home Page`);
})

app.get("/about",(req,res)=>{
    res.send("About Page");
})


// ==========================================
// 4. START THE SERVER
// ==========================================
app.listen(3000);