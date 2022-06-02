
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
pr.then(
    function(result){
        console.log(result);
    }
).catch(
    function(err){
        console.log(err);
    }
).finally(  // 항상 실행됨. 긴 시간의 loading 화면을 없앨때 유용하다.
    function(){
        console.log('Finish!');
    }    
);