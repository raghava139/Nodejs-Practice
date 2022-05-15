// import the path module

const path=require('path')

//printing path.delimiter value

// console.log(path.delimiter)

//import process module
const process=require('process');

//printing path.delimiter value
var delimiter=path.delimiter

console.log(process.env.PATH)
console.log(process.env.PATH.split(path.delimiter));