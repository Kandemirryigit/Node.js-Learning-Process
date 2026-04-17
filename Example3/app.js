const express=require("express");

const app=express();

app.get("/api/users",(req,res)=>{
    const users=[
        {id:1,name:"Yigit"},
        {id:2,name:"Alex"},
        {id:3,name:"John"}
    ];

    res.json(users);
})


app.listen(3000);