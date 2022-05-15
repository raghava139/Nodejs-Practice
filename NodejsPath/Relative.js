const path=require('path');
path1=path.relative('raghava/hello','raghava/index.html')
console.log(path1)

path2=path.relative('raghava/admin','admin/files')
console.log(path2)

//when both the paths are same
//it returns blank string
path3=path.relative('admin/hello','admin/hello')