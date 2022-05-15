var cp =require('child_process')
var child=cp.fork(__dirname+`/sub.js`)
child.on('message',function(m){
    console.log(`parent process received :`, m)
})
child.send({hello:`from parent process`});
child.on('close',(code)=>{
    console.log(`child process exited with code ${code}`)
})