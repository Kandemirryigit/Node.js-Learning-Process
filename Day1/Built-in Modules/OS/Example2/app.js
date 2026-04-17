const os=require("os");

console.log("=== SYSTEM INFO ===");
console.log("Platform:",os.platform());
console.log("OS type:",os.type());
console.log("Architecture:",os.arch());


console.log("\n\n=== CPU INFO ===");
const cpus=os.cpus();
console.log("CPU Model:",cpus[0].model);
console.log("Number of cores:",cpus.length);



console.log("\n\n=== MEMORY INFO ===");
console.log("Free Memory:",os.freemem());
console.log("Total Memory:",os.totalmem());
console.log("Used Memory:",os.totalmem()-os.freemem());



console.log("\n\n=== SYSTEM UP TIME ===");
console.log("uptime (seconds):",os.uptime());
console.log("Uptime (hours):",os.uptime()/3600);



console.log("\n\n=== USER AND SYSTEM INFO ===");
console.log("Home Directory",os.homedir());
console.log("Temp Directory:",os.tmpdir());







// The OS module is used for:
// system monitoring
// server health checks
// performance tracking
// backend diagnostics