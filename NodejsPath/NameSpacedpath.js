//import the path module
const path=require('path')

let originalPath="c:\\windows\\users"
console.log("original Path",originalPath)

//namespacedPath
let nameSpacedPath=path.toNamespacedPath(originalPath)
console.log("NameSpaced path:",nameSpacedPath)