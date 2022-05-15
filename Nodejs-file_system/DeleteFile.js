//deleting file

const fs=require('fs')
fs.unlink('dupWriteFile.txt',function(err){
    console.log('data is deleted')
})