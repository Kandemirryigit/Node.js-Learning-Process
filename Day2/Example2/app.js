const express=require("express");

const app=express();

// Home route
app.get("/",(req,res)=>{
    res.send("Home Page");
})

// About route
app.get("/about",(req,res)=>{
    res.send("About Page");
})

// Contact route
app.get("/contact",(req,res)=>{
    res.send("Contact Page");
})

// API route
app.get("/api",(req,res)=>{
    res.send("Api Page");
})

// Profile route 
app.get("/profile",(req,res)=>{
    res.send("Profile Page");
})


app.listen(3000);
