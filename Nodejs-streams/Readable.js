//accessing stream

const {Readable}=require('stream')

//Reading the data
const inStream=new Readable({ read() {}})

//pushing the data to the stream

inStream.push('This is Raghavendra')

inStream.push('great')

// inStream.push(null)

//send data to destination to the standard output
inStream.pipe(process.stdout)