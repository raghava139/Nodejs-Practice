const {execFile}=require('child_process')


//executes the exec
const child=execFile('node',[`execut.js`],(error,stdout,stderr)=>{
    if(error){
        throw error;
    }
    console.log(stdout)
})