const fs=require('fs')

//asynchronous method
fs.readFile('myFile.txt',function(err,data){

    if(err)
    {
        return console.log(err)
    }
    console.log(`Asynchronous Method:${data}`)
})

//synchronous method
// var data = fs.readFileSync('myFile.txt');
// console.log("Synchronous read: " + data.toString());