//import the path module 
const path =require('path');

path1=path.extname("hello.txt")
console.log(path1)

path2=path.extname('readme.md')
console.log(path2)

//file with no extension
//return empty string
path3=path.extname("ffile")
console.log(path3)


//file with blank extension
//Return only the period
path4=path.extname('greatExample.')
console.log(path4)

path5=path.extname('readme.md.txt')
console.log(path5)

//extension name of the current Script
path6=path.extname(__filename)
console.log(path6)