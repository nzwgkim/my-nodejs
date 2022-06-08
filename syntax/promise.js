
const pr = new Promise((resolved,reject)=>{
    setTimeout(()=>{
        resolved('OK');
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
        console.log(result,'-1');
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
pr.then((res)=>{
    console.log(res, '-2');
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('-Final');
});

console.time('start');
const myPr = new Promise((res, rej)=>{    
    setTimeout(()=>{
        console.log('Promise:');
        res('ok');
    }, 3000);
}).then((res)=>{
    console.log('resolve:'+res);
    console.timeEnd('start');
})
.catch((rej)=>{
    console.log('reject:'+rej);
    console.timeEnd('start');
});

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises
// function successCallback(result) {
//     console.log("Audio file ready at URL: " + result);
// }
  
// function failureCallback(error) {
//     console.log("Error generating audio file: " + error);
// }  
// createAudioFileAsync(audioSettings, successCallback, failureCallback);
// createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
// const promise = createAudioFileAsync(audioSettings);
// promise.then(successCallback, failureCallback);



