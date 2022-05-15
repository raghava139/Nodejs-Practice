const path=require('path')
// case 1
//If "dir","root" and base are all given
//root is ignored.

let path1=path.format({
    root:'/ignored/root/',
    dir:"/home/user/personal",
    base:"details.txt",
})
console.log('path 1:',path1)

// case 2
// if dir is not specified the root will be used
let path2=path.format({
    root:'/',
    base:'game.dat',
    ext:".no extension"
});
console.log("path 2 :",path2)

//case 3
//if base is not specified 
//name and ext will be used 
let path3 = path.format({
    root: "/images/",
    name: "image",
    ext: ".jpg",
});
console.log("Path 3:", path3);