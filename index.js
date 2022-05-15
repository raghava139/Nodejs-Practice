// //import http module
// import module from 'module'
// const require=module.createRequire(import.meta.url)
var http=require("http")
// //setting up port 
var port=7000
// //create http server
http.createServer(function(req,res){
    //response.writeHead(statuscode,statusmessage(optional),headers)
    res.writeHead(400,{'Content-Type':'text/plain'})
    //res.end(data,encoding)
    res.end('<h3>raghavendra</h3>')
    //listen(port,host,callbackfunction)
}).listen(port,()=>{console.log(`http://localhost:${port}`)})
// // console.log('server is star')
// //modules
// //export - literal
// const hello=require('./ObjLite.cjs')
// console.log(hello)

// //export -proerties
// const output=require('./ObjProp_mod')
// // console.log(output.objectName)
// console.log(output)

// //export methods or function
// const output2=require('./objMet_mod')
// // console.log(output2)
// output2.raghava('this is obj method or function')

// require folder structure-using package.json() 
// const SubOne=require('./SubFolder')
// // console.log(SubOne.Name)
// console.log(SubOne)

// es6 import and export concept

// import name, { hello } from "./Es6csyntax.js"
// name('default export')
// hello()

// //alias duplicate
// import * as otherName from "./Es6csyntax.js"
// otherName.default('default export')
// otherName.hello()