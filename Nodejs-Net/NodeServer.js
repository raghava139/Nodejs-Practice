const net=require('net')
// var port =7272
var server=net.createServer((socket)=>{
    // console.log(socket)
    socket.end('the server connection is enabled')
}).on('error',(err)=>{
    throw err 
})
server.listen(()=>{
    address=server.address();
    // console.log(`http://localhost:${port}`)
    console.log("address is", address)
})