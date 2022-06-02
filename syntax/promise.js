
const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('OK');
    },3000);
});


// 방1
// pr.then(
//     function(result){
//         console.log(result);
//     },
//     function(err){
//         console.log(err);
//     }
// );


// 방2 prefered!
//pr.then().catch().finally();
pr.then(
    function(result){
        console.log(result,'=1');
    }
).catch(
    function(err){
        console.log(err);
    }
).finally(  // 항상 실행됨. 긴 시간의 loading 화면을 없앨때 유용하다.
    function(){
        console.log('=Final');
    }    
);
console.log('시작');
pr.then((result)=>{
    console.log(result, '-2');
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('-Final');
});