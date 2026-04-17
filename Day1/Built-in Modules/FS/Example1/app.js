const fs=require("fs");

const data=fs.readFileSync("test.txt","utf8");
console.log(data);


// Read file (Sync)
// waits until file is read