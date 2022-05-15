const zlib=require('zlib')
const unZip=zlib.createUnzip()
const fs=require('fs')
const inp =fs.createReadStream('new1.txt.gz');
const out=fs.createWriteStream('new1.txt')
inp.pipe(unZip).pipe(out);