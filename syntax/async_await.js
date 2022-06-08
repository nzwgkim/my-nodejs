// 함수 앞에 async를 붙이면, promise가 된다.
async function getName(){
    return 'Mike';
}
console.log(getName()); // Promise { 'Mike' }

getName().then((name)=>{
    console.log(name);
});

function getNamePromise(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(name);
        }, 1000);
    });
}

// await는 async 함수 안에서만 사용된다. await 다음에는 항상 promise가 와야 한다.
async function showName(){
    const result = await getNamePromise('Jone');
    console.log(result);
}

showName();
