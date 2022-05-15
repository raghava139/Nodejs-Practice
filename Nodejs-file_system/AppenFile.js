//append File
const fs=require('fs')
fs.appendFile('dupWriteFile.js','console.log("data is added")',function(err){
    console.log("extra data is added successfully")
})