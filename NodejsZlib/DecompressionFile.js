const zlib=require('zlib')
const unZip=zlib.createUnzip()
const fs=require('fs')
const inp =fs.createReadStream('great.doc.gz');
const out=fs.createWriteStream('great.doc')
inp.pipe(unZip).pipe(out);