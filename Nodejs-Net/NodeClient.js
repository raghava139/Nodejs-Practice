const net =require('net')
const client=net.connect({port:58247},()=>{
    console.log('connected successfully')
    client.write('client is connected is connected to server')
})
client.on("data",(data)=>{
    console.log(data)
    console.log(data.toString())
    client.end()
})
client.on("end",()=>{
    console.log("disconnect the server")
    // console.log('great')
})