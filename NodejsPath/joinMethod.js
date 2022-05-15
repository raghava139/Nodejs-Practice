const path=require('path')

//joining 2 path-segments
path1=path.join('user/like','index.html')
console.log(path1)

//joining 3 path-segments
path2=path.join('users','hello','great.html')
console.log(path2)

//joining with zero-length paths
path3=path.join('users','','',"index.html")
console.log(path3)