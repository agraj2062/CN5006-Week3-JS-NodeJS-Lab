const os = require("os");

// Import Util module
const util = require("util");

console.log("===== Computer Information =====");

// Temporary directory
console.log("Temporary Directory: " + os.tmpdir());

// Computer hostname
console.log("Hostname: " + os.hostname());

// Operating system
console.log("OS: " + os.platform());

// OS version
console.log("OS Release: " + os.release());

// System uptime
console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours");

// User information
console.log("User Information: ");
console.log(util.inspect(os.userInfo()));

// Total memory
console.log("Total Memory: " +
    (os.totalmem() / 1000000000).toFixed(2) + " GB");

// Free memory
console.log("Free Memory: " +
    (os.freemem() / 1000000000).toFixed(2) + " GB");

// CPU information
console.log("CPU Information: ");
console.log(util.inspect(os.cpus()));

// Network information
console.log("Network Information: ");
console.log(util.inspect(os.networkInterfaces()));

console.log("===== Program Ended =====");
