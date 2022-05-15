//initialize the buffer with given data
// const buff=Buffer.from('hello')

// console.log(buff)
// console.log(buff.toString())
// console.log(buff[0])
// console.log(buff[1])
// console.log(buff[2])
// console.log(buff[3])
// console.log(buff[4])

//allocate the size to it
const newBuff=Buffer.alloc(10)

//write the data on buffer
newBuff.write('raghavendra')

console.log(newBuff)
console.log(newBuff.toString())
//changing the data with using of utf-8 code hexa and dec
newBuff[2]=100//changing

//to string( converter)
console.log(newBuff.toString())
//length of buffer
console.log(newBuff.length)

//Buffer.isBuffer(object)
console.log(Buffer.isBuffer(newBuff));

//copy the buffer
const buff1=new Buffer('great')
const buff2=Buffer.alloc(5)
buff1.copy(buff2)
console.log(buff2.toString('utf-8'))

//slice method in buffer
const buffering=Buffer('THIS IS SLICE METHOD')
const converting=buffering.slice(0,10)
console.log(converting.toString())

//concat method in buffer
const buffe1=Buffer('THIS IS ')
const buffe2=Buffer('CONCAT METHOD')
const joint=Buffer.concat([buffe1,buffe2])
console.log(joint.toString())