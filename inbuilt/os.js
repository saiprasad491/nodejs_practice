let os = require('os');
console.log(os.platform()); //win32
console.log(os.arch()); //x64
console.log(os.cpus()); // Array of CPU info
console.log(os.cpus().length+" core"); // 4 core
console.log(os.totalmem()); // Total memory in bytes
console.log(os.freemem()); // Free memory in bytes
console.log(os.uptime()); // 6120.437 // System uptime in seconds

