const zlib=require('zlib')
const unZip=zlib.createUnzip()
const fs=require('fs')
const inp =fs.createReadStream('Lenovo.txt.gz');
const out=fs.createWriteStream('Lenovo.txt')
inp.pipe(unZip).pipe(out);