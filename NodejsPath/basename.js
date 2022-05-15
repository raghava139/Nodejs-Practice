// import the path module

const path =require('path');
path1=path.basename("Users/Lenovo/Desktop/pathGetting.txt")
console.log(path1)

//using the extension parameter 
path2= path.basename("Users/Lenovo/Desktop/pathGetting.txt",'.txt');
console.log(path2)