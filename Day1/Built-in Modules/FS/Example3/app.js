const fs = require("fs");

fs.writeFile("test.txt","Hello Kandemir!",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File Written!");
});


// Write file