// there are two classes in libTypedarrays
// ReadStream
//writeStream

//ReadStream
var tty=require('tty')
process.stdin.setRawMode(true)
process.stdin.resume()
console.log('I am leaving now')
process.stdin.on('keypress',function(char,key){
    if(key && key.ctrl && key.name=='c')
    {
        console.log('ok')
        process.exit()
    }
})