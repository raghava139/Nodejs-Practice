var assert=require('assert');
function add(a,b){
    return a+b;
}
var expected=add(1,2)
//It will not provide any output because the case is true.
//If you want to see output, you need to make the test fail.
assert(expected===3,'true value')

//assert is false
assert(expected===4,"false value")