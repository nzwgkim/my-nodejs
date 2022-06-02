
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
);