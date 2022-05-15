const {StringDecoder}=require('string_decoder')
const decoder=new StringDecoder("utf-8")

//using the End() Method
const text_one=Buffer.from("Raghavendra","utf-8")
let decoded_text=decoder.end(text_one)
console.log("Decoded Text:",decoded_text);

//The Euro Symbol is denoted using 
//the bytes [0*E2 ,0*82,0*AC]

console.log("Decoding the Euro symbol")

//decoding the euro symbol
//using the write() method to 
//write the first two parts
console.log(decoder.write(Buffer.from([0xE2])));
// console.log(decoder.write(Buffer.from([0*E2])));
console.log(decoder.write(Buffer.from([0x82])));

// Finishing the symbol using the end() method
// with that gives an additional call to write()
// using the last part of the buffer
console.log(decoder.end(Buffer.from([0xAC])));