//default export
function name(passValue){
    console.log(passValue)
}
export default name


//named export
function hello(){
    console.log('named export')
}
export {hello}