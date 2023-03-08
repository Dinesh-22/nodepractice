const os = require('os');

//display user Information 
const user = os.userInfo();
console.log(user);

//method returns the uptime in Seconds 
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs);