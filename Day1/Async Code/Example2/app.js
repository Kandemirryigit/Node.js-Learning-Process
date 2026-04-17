const fs=require("fs");

// Read file asynchronously
fs.readFile("test.txt","utf8",(err,data)=>{
    if(err){
        console.log("Error:",err);
        return;
    }

    console.log(data);

});


console.log("Finished");