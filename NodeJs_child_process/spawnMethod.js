const {spawn}=require('child_process')
const child=spawn('dir',['C:\BACKEND'],{shell:true})
child.stdout.on('data',(data)=>{
    console.log(`standardOutPut:${data}`)
})
child.stderr.on('data',(data)=>{
    console.log(`standard Error:${data}`)
})
child.on('close',(code)=>{
    console.log(`child process exited with code ${code}`)
})