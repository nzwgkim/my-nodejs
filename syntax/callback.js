function A(){
    console.log('A');
}
A();

var _a = A;     // A()실행됨
console.log('0--------------');
console.log(_a);
console.log(_a());
function AA(aa,bb){
    c = aa+ bb;
    console.log('SUM: ', c);
};
AA(10,20);

var _aa = AA;   // AA(aa,bb)  실행안됨.
_aa(3,10);
console.log('1--------------');

var B = function (){
    console.log('B');
};
B();

var BB = function(aa,bb){
    c= aa*bb;
    console.log('PROD: '+c);
}
BB(10,20);
console.log('2--------------');

function fnCallBack1(cb)
{
    cb();
}

fnCallBack1(A);
fnCallBack1(B);

function fnCallBack2(cb, a, b)
{
    cb(a,b);
}
fnCallBack2(AA,3,5);
fnCallBack2(BB,3,5);