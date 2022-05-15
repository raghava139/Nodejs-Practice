var SHA256=require("crypto-js/sha256")
var plaindata='this is plain data'

var hashedData=SHA256(plaindata).to
console.log(hashedData)


//testing  purpose
// var data=require('crypto-js/sha256')
// var plaintext='raghavendra'
// var x=data(plaintext).toString()
// console.log(x)


