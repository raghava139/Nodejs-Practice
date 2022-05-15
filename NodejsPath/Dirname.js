// import path module
const path =require('path')

//complete file path
path1=path.dirname('Users/Lenovo/Desktop/pathGetting.txt')
console.log(path1)


//only file name
path2=path.dirname("readme.md")
console.log(path2)


//path with file not specified
path3=path.dirname("website/post/comments")
console.log(path3)

// console.log('file name',__filename)
// console.log('file name',__dirname)