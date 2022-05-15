const {stringDecoder, StringDecoder}=require('string_decoder')

//create a new instance of the decoder
const decoder =new StringDecoder('utf-8')

const text_one=Buffer.from('raghavendra','utf-8')

//syntax
//stringDecoder.write(buffer)
let decoded_text=decoder.write(text_one)
console.log(decoded_text)