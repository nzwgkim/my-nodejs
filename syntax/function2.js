console.log(Math.round(1.6));   //2
console.log(Math.round(1.4));   //1

function sum(a,b) {
    var ret = a + b;
    return a+b;
}
console.log(sum(3,6));

var globalNum=10; // globalNum: global var
function printNum() {
    console.log( globalNum ); // ①
    var globalNum = 20; // globalNum: local var 
    console.log( globalNum ); // ②
}
printNum();
console.log('1--------------------------');
