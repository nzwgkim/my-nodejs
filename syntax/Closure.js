function makeAdd(x){
    return function(y){
        return x+y;
    }
}
const add3 = makeAdd(3);
console.log(add3(4));   // 7
const add5 = makeAdd(5);
console.log(add5(6));   //11
console.log(add3(9));   //12

function makeCount(){
    let num = 0;    // 은닉화
    return function(){
        return num++;
    }
}

let cnt = makeCount();
console.log(cnt()); //0
console.log(cnt()); //1
console.log(cnt()); //2