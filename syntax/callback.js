function A(){
    console.log('A');
}
A();

function AA(a,b){
    console.log(a+b);
};
AA(10,20);


var B = function (){
    console.log('B');
};
B();

var BB = function(a,b){
    console.log(a+b);
}
BB(10,20);

function fnCallBack(cb)
{
    cb();
}

fnCallBack(A);
fnCallBack(B);