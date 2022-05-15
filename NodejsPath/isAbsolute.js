const path =require('path')
//correct path
path1=path.isAbsolute('/user/bash/')
console.log(path1)

// incorrect path
path2=path.isAbsolute('user/bash/readme.md')
console.log(path2)

// correct path
path3=path.isAbsolute('/user/bash/readme.md')
console.log(path3)

//path incorrect
path4=path.isAbsolute("..")
console.log(path4)