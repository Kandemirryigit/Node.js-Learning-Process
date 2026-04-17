// Import file system module
const fs=require("fs");

// Read file synchronously (blocking)
const data=fs.readFileSync("test.txt","utf8");

console.log(data);
console.log("Finsihed");


// File must be read first → then next line runs