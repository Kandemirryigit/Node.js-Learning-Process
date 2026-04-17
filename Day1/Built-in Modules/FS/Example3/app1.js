const fs = require("fs");

fs.appendFile("test.txt","\nNew Line",(err)=>{
    if(err) throw err;
    console.log("Added!");
});


// Append file