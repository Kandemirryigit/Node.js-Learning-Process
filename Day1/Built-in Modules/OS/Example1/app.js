// Import built-in OS module (gives system information)
const os=require("os");  

// Show which operating system you are using (linux, win32, darwin, etc.)
console.log("platform:",os.platform());

// Show how many CPU cores your computer has
console.log("cPU cores:",os.cpus().length);

// Show OS type (Linux, Windows_NT, etc.)
console.log("OS type:",os.type());

// Show total memory in bytes
console.log("Total memory:",os.totalmem());

// Show free memory in bytes
console.log("Free memory:",os.freemem());



// What you learned
// require("os") → imports system module
// You can access hardware info with Node.js
// Node.js is powerful beyond just websites


// Node.js is not just for web apps — it can also:
  // read system info
  // handle files
  // create servers
  // run backend logic

