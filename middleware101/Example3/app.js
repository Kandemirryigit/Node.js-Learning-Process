const express=require("express");
const app=express();

app.use(express.json());

// Middleware (runs on every request)
app.use((req,res,next)=>{
    console.log(`${req.method}  ${req.url}`);
    next();
})


// Home
app.get("/",(req,res)=>{
    res.send("Home Page");
});


// GET users
app.get("/api/users",(req,res)=>{
    res.json([
        {id:1,name:"Yigit"},
        {id:2,name:"Alex"}
    ]);
});


app.listen(3000);