//import the os module
const os=require('os')

//architecture
//to know the os  of your cpu
console.log(os.arch())

//cpus to know about containing information in array of objects ----model,speed,time
console.log(os.cpus())

//LE--LITTLE ENDIAN
//BE--BIG ENDIAN
console.log(os.endianness())

//freeMeme--it returns system memory
console.log(os.freemem())

//HOME DIRECTORY
console.log(os.homedir())

//host name
console.log(os.hostname())

//load-average() of operating-system---system activity in os
console.log(os.loadavg())

//network interfaces
console.log(os.networkInterfaces())

//to know the os-platform---like win32,linux,sunos etc...,
console.log(os.platform())

//to know the release os
console.log(os.release())

//to know the temporary files  in our "os"
console.log(os.tmpdir())

//to know the total amount of memory in bytes
console.log(os.totalmem())

//this method returns the operating system name. For example 'linux' on linux, 'darwin' on os x and 'windows_nt' on windows.
console.log(os.type())

//This method returns the system uptime in seconds.
console.log(os.uptime())

//This method returns a subset of the password file entry for the current effective user.
var options = {
    encoding: 'raghava'
};
// Printing user information
console.log(os.userInfo(options));