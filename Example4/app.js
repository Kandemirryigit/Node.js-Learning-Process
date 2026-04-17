const express=require("express");

const app=express();

// Users GET
app.get("/api/users",(req,res)=>{
    const users=[
        {id:1,name:"Yigit"},
        {id:2,name:"Alex"}
    ];
    res.json(users);
});


// CREATE USER (POST)
app.post("/api/users",(req,res)=>{
    const newUser=req.body;
    console.log("New User:",newUser);

    res.json({
        message:"User created successfully",
        user:newUser
    });
});



app.listen(3000);