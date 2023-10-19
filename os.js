const os=require("os");
console.log("free memory",os.freemem()/1024/1024/1024)
console.log("Total Memory",os.totalmem()/1024/1024/1024)
console.log("Version",os.version())
console.log("UserInfo",os.userInfo().username)
console.log("Processor",os.cpus())