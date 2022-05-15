const path=require('path')

path1=path.normalize('/users/data');
console.log(path1)

// (..)back
path2=path.normalize('/users/data/..');
console.log(path2)

path3=path.normalize('/users/admin/../comments')
console.log(path3)

path4=path.normalize('/users//admin//comments')
console.log(path4)
