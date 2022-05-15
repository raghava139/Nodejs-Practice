const {exec}=require("child_process")

// console.log(exec)
// Counts the number of directory in 
// current working directory
exec('dir | find /c /v ""',(error,stdout,stderr)=>{
        // console.log(error)
        // console.log(stdout)
        // console.log(stderr)
        if(error){
            console.error(`myError is :${error}`)
            return;
        }
        console.log(`stdout: No. of directories = ${stdout}`)
        if(stderr=""){
            console.error(`stderr is :${stderr}`)
        }
})