const path=require('path');
console.log('current directory',__dirname)

//resolving 2 path-segments
//with the current directory

path1=path.resolve('users/admin','readme.md')
console.log(path1)

//resolving 3  path segments
//with the current directory
path2=path.resolve('users','great','raghava.md')
console.log(path2)

//treating of the first segment
//as root, ignoring the current directory
path3=path.resolve('/users/admin','readme.md')
console.log(path3) 